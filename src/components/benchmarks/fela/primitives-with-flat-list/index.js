import React, { useCallback } from 'react';
import { createComponent, createComponentWithProxy } from 'react-fela';
import { FlatList, Text, View } from 'react-native';

import { wrapRenderer } from 'components/benchmarks/fela/helpers';
import * as colors from 'utils/colors';
import { getCellColor, toPercent } from 'utils/helpers';

const Table = createComponentWithProxy(() => ({}), FlatList);

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

const _TableComponent = ({ table, ...props }) => {
  const keyExtractor = useCallback(
    (item, index) => `${TableComponent.key}-${index}`,
    [],
  );

  const renderColumn = useCallback(
    (value, rowIndex, columnIndex) => (
      <Cell
        key={`row-${rowIndex}-column-${columnIndex}`}
        style={{ opacity: parseFloat(value) }}>
        <CellText numberOfLines={1}>{toPercent(value)}</CellText>
      </Cell>
    ),
    [],
  );

  const renderRow = useCallback(
    ({ item: row, index: rowIndex }) => (
      <Row key={`row-${rowIndex}`}>
        {row.map((value, columnIndex) =>
          renderColumn(value, rowIndex, columnIndex),
        )}
      </Row>
    ),
    [renderColumn],
  );

  return (
    <Table
      data={table}
      keyExtractor={keyExtractor}
      renderItem={renderRow}
      {...props}
      style={props.style}
    />
  );
};

_TableComponent.key = 'fela-primitives-table-with-flat-list';
_TableComponent.title = 'Fela (Primitives + FlatList)';

const TableComponent = wrapRenderer(_TableComponent);
export { TableComponent };
