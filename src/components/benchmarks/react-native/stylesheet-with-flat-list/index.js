import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as colors from 'utils/colors';
import { getCellColor, toPercent } from 'utils/helpers';

const styles = StyleSheet.create({
  table: {},
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
  },
});

const TableComponent = ({ table, ...props }) => {
  const keyExtractor = useCallback(
    (item, index) => `${TableComponent.key}-${index}`,
    [],
  );

  const renderColumn = useCallback(
    (value, rowIndex, columnIndex) => (
      <View
        key={`row-${rowIndex}-column-${columnIndex}`}
        style={[
          styles.cell,
          {
            backgroundColor: getCellColor(parseFloat(value)),
          },
        ]}>
        <Text numberOfLines={1} style={styles.text}>
          {toPercent(value)}
        </Text>
      </View>
    ),
    [],
  );

  const renderRow = useCallback(
    ({ item: row, index: rowIndex }) => (
      <View key={`row-${rowIndex}`} style={styles.row}>
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
      style={[styles.table, props.style]}
    />
  );
};

TableComponent.key = 'react-native-stylesheet-table-with-flat-list';
TableComponent.title = 'React Native (StyleSheet + FlatList)';

export { TableComponent };
