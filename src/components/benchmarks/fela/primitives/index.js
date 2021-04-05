import React from 'react';
import { createComponent } from 'react-fela';
import { ScrollView, Text, View } from 'react-native';

import { wrapRenderer } from 'components/benchmarks/fela/helpers';
import * as colors from 'utils/colors';
import { getCellColor, toPercent } from 'utils/helpers';

const Table = createComponent(() => ({}), ScrollView);

const Row = createComponent(
  () => ({
    flexDirection: 'row',
  }),
  View,
);

const Cell = createComponent(
  state => ({
    flex: 1,
    padding: 10,
    backgroundColor: getCellColor(state.opacity),
  }),
  View,
);

const CellText = createComponent(
  () => ({
    textAlign: 'center',
    color: colors.white,
  }),
  Text,
);

const _TableComponent = ({ table, ...props }) => (
  <Table {...props} style={props.style}>
    {table.map((row, rowIndex) => (
      <Row key={`row-${rowIndex}`}>
        {row.map((value, columnIndex) => (
          <Cell
            key={`row-${rowIndex}-column-${columnIndex}`}
            style={{ opacity: parseFloat(value) }}>
            <CellText numberOfLines={1}>{toPercent(value)}</CellText>
          </Cell>
        ))}
      </Row>
    ))}
  </Table>
);

_TableComponent.key = 'fela-primitives-table';
_TableComponent.title = 'Fela (Primitives)';

const TableComponent = wrapRenderer(_TableComponent);
export { TableComponent };
