import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as colors from 'utils/colors';

export const TitleRow = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {(title || 'CSS in JS Benchmarks').toUpperCase()}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    color: colors.black,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
