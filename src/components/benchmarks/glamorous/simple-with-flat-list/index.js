import React, { useCallback } from 'react';
import glamorous from 'glamorous-native';

import { getCellColor, toPercent } from 'utils/helpers';

const Table = glamorous.flatList();

const Row = glamorous.view({
  flexDirection: 'row',
});

const Cell = glamorous.view(
  {
    flex: 1,
    padding: 10,
  },
  props => ({
    backgroundColor: getCellColor(props.opacity),
  }),
);

const Text = glamorous.text({
  textAlign: 'center',
  color: 'white',
});

const TableComponent = ({ table, ...props }) => {
  const keyExtractor = useCallback(
    (item, index) => `${TableComponent.key}-${index}`,
    [],
  );

  const renderColumn = useCallback(
    (value, rowIndex, columnIndex) => (
      <Cell
        key={`row-${rowIndex}-column-${columnIndex}`}
        opacity={parseFloat(value)}>
        <Text numberOfLines={1}>{toPercent(value)}</Text>
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
      removeClippedSubviews={false}
      renderItem={renderRow}
      {...props}
      style={props.style}
    />
  );
};

TableComponent.key = 'glamorous-simple-table-with-flat-list';
TableComponent.title = 'Glamorous (Simple + FlatList)';

export { TableComponent };
