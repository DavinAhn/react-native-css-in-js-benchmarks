import PropTypes from 'prop-types';
import React from 'react';

import { RUN_COUNT } from 'utils/config';
import {
  avg,
  canUsePerformanceTool,
  clearMarksAndMeasures,
  endMeasurement,
  generateTable,
  startMeasurement,
} from 'utils/helpers';

export class Benchmark extends React.PureComponent {
  static propTypes = {
    TableComponent: PropTypes.func.isRequired,
    onGenerateTable: PropTypes.func,
    onGetMountTime: PropTypes.func.isRequired,
    onGetRenderTime: PropTypes.func.isRequired,
  };

  generateNewTable = callback => {
    const table = generateTable();

    if (this.mounted) {
      this.setState({ table }, callback);
    }

    if (this.props.onGenerateTable) {
      this.props.onGenerateTable(table);
    }

    return table;
  };

  state = {
    table: this.generateNewTable(),
  };

  componentWillMount() {
    this.mounted = true;

    if (!canUsePerformanceTool(true)) {
      return;
    }

    clearMarksAndMeasures();
    startMeasurement();
  }

  componentDidMount() {
    if (!canUsePerformanceTool(false)) {
      if (this.props.onGetMountTime) {
        this.props.onGetMountTime(0);
      }
      if (this.props.onGetRenderTime) {
        this.props.onGetRenderTime(0);
      }
      return;
    }

    endMeasurement(undefined, duration => {
      clearMarksAndMeasures();
      if (this.props.onGetMountTime) {
        this.props.onGetMountTime(duration);
      }

      this.runRenderTest();
    });
  }

  componentWillUnmount() {
    this.mounted = false;

    if (!canUsePerformanceTool(false)) {
      return;
    }

    clearMarksAndMeasures();
  }

  mounted = false;

  runRenderTest = async (runCount = RUN_COUNT) => {
    if (!canUsePerformanceTool(true)) {
      if (this.props.onGetRenderTime) {
        this.props.onGetRenderTime(0);
      }
      return 0;
    }

    clearMarksAndMeasures();

    const durations = [];
    for (let i = 0; i < runCount; i++) {
      const suffix = `-${i}`;

      const duration = await new Promise(resolve => {
        setTimeout(() => {
          startMeasurement({ suffix });

          this.generateNewTable(() => {
            endMeasurement({ clear: true, suffix }, resolve);
          });
        }, 1);
      });

      durations.push(duration);
    }

    const duration = avg(durations);
    clearMarksAndMeasures();

    if (this.props.onGetRenderTime) {
      this.props.onGetRenderTime(duration);
    }

    return duration;
  };

  render() {
    const { table } = this.state;
    const { TableComponent } = this.props;

    if (!TableComponent) {
      return null;
    }

    return (
      <TableComponent
        removeClippedSubviews={false}
        table={table}
        testID="benchmarkTable"
      />
    );
  }
}
