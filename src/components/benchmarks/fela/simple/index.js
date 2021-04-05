import { StyleSheet } from 'fela-tools';
import React from 'react';
import { useFela } from 'react-fela';
import { ScrollView, Text, View } from 'react-native';

import { wrapRenderer } from 'components/benchmarks/fela/helpers';
import * as colors from 'utils/colors';
import { getCellColor, toPercent } from 'utils/helpers';

const rules = StyleSheet.create({
  table: {},
  row: {
    flexDirection: 'row',
  },
  cell: state => ({
    flex: 1,
    padding: 10,
    backgroundColor: getCellColor(state.opacity),
  }),
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
              style={renderer.renderRule(rules.cell, {
                opacity: parseFloat(value),
              })}>
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

_TableComponent.key = 'fela-simple-table';
_TableComponent.title = 'Fela (Simple)';

const TableComponent = wrapRenderer(_TableComponent);
export { TableComponent };
