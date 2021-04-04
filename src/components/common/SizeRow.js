import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as colors from 'utils/colors';

export const SizeRow = ({ uniqueSize, tableSize }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      <Text testID="uniqueTableCellsText">{uniqueSize}</Text>
      {' unique cells in '}
      <Text testID="totalTableCellsText">{tableSize}</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyBackground,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    color: colors.greyText,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
