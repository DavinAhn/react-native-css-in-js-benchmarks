import React, { useCallback } from 'react';
import { useFela } from 'react-fela';
import { FlatList, Text, View } from 'react-native';
import { StyleSheet } from 'fela-tools';

import { wrapRenderer } from 'components/benchmarks/fela/helpers';
import * as colors from 'utils/colors';
import { getCellColor, toPercent } from 'utils/helpers';

const rules = StyleSheet.create({
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

const _TableComponent = ({ table, ...props }) => {
  const { renderer } = useFela();

  const keyExtractor = useCallback(
    (item, index) => `${TableComponent.key}-${index}`,
    [],
  );

  const renderColumn = useCallback(
    (value, rowIndex, columnIndex) => (
      <View
        key={`row-${rowIndex}-column-${columnIndex}`}
        style={[
          renderer.renderRule(rules.cell),
          {
            backgroundColor: getCellColor(parseFloat(value)),
          },
        ]}>
        <Text numberOfLines={1} style={renderer.renderRule(rules.text)}>
          {toPercent(value)}
        </Text>
      </View>
    ),
    [renderer],
  );

  const renderRow = useCallback(
    ({ item: row, index: rowIndex }) => (
      <View key={`row-${rowIndex}`} style={renderer.renderRule(rules.row)}>
        {row.map((value, columnIndex) =>
          renderColumn(value, rowIndex, columnIndex),
        )}
      </View>
    ),
    [renderColumn, renderer],
  );

  return (
    <FlatList
      data={table}
      keyExtractor={keyExtractor}
      renderItem={renderRow}
      {...props}
      style={renderer.renderRule(rules.table, props.style)}
    />
  );
};

_TableComponent.key = 'fela-inline-table-with-flat-list';
_TableComponent.title = 'Fela (Inline + FlatList)';

const TableComponent = wrapRenderer(_TableComponent);
export { TableComponent };
