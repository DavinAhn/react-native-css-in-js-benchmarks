import React, { useCallback } from 'react';
import styled from 'styled-components/native';

import { getCellColor, toPercent } from 'utils/helpers';

const Table = styled.FlatList``;

const Row = styled.View`
  flex-direction: row;
`;

const CellDefault = styled.View`
  flex: 1;
  padding: 10px;
`;

const Cell = styled(CellDefault)`
  background: ${props => getCellColor(props.opacity)};
`;

const Text = styled.Text`
  text-align: center;
  color: white;
`;

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
    />
  );
};

TableComponent.key = 'styled-components-decoupled-cell-table-with-flat-list';
TableComponent.title = 'Styled Components (Decoupled Cell + FlatList)';

export { TableComponent };
