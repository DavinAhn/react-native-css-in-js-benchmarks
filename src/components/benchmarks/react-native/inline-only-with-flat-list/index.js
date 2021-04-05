import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';

import * as colors from 'utils/colors';
import { getCellColor, toPercent } from 'utils/helpers';

const TableComponent = ({ table, ...props }) => {
  const keyExtractor = useCallback(
    (item, index) => `${TableComponent.key}-${index}`,
    [],
  );

  const renderColumn = useCallback(
    (value, rowIndex, columnIndex) => (
      <View
        key={`row-${rowIndex}-column-${columnIndex}`}
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: getCellColor(parseFloat(value)),
        }}>
        <Text
          numberOfLines={1}
          style={{
            textAlign: 'center',
            color: colors.white,
          }}>
          {toPercent(value)}
        </Text>
      </View>
    ),
    [],
  );

  const renderRow = useCallback(
    ({ item: row, index: rowIndex }) => (
      <View
        key={`row-${rowIndex}`}
        style={{
          flexDirection: 'row',
        }}>
        {row.map((value, columnIndex) =>
          renderColumn(value, rowIndex, columnIndex),
        )}
      </View>
    ),
    [renderColumn],
  );

  return (
    <FlatList
      data={table}
      keyExtractor={keyExtractor}
      removeClippedSubviews={false}
      renderItem={renderRow}
      {...props}
      style={props.style}
    />
  );
};

TableComponent.key = 'react-native-inline-only-table-with-flat-list';
TableComponent.title = 'React Native (Inline Only + FlatList)';

export { TableComponent };
