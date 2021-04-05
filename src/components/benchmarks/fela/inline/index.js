import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'fela-tools';

import { wrapRenderer } from 'components/benchmarks/fela/helpers';
import * as colors from 'utils/colors';
import { getCellColor, toPercent } from 'utils/helpers';
import { useFela } from 'react-fela';

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
  return (
    <ScrollView
      {...props}
      style={renderer.renderRule(rules.table, props.style)}>
      {table.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={renderer.renderRule(rules.row)}>
          {row.map((value, columnIndex) => (
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
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

_TableComponent.key = 'fela-inline-table';
_TableComponent.title = 'Fela (Inline)';

const TableComponent = wrapRenderer(_TableComponent);
export { TableComponent };
