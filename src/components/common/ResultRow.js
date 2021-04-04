import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as colors from 'utils/colors';

export const ResultRow = ({ mountTime, renderTime }) => {
  const mountTimeText = useMemo(() => {
    return `${Math.round(mountTime || 0)}ms`;
  }, [mountTime]);
  const renderTimeText = useMemo(() => {
    return `${Math.round(renderTime || 0)}ms`;
  }, [renderTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Mount time: <Text testID="mountTimeText">{mountTimeText}</Text>
      </Text>
      <Text style={styles.text}>
        Rerender time: <Text testID="rerenderTimeText">{renderTimeText}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyBackground,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    color: colors.greyText,
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
