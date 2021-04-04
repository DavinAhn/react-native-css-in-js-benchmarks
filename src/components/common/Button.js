import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import * as colors from 'utils/colors';

export const Button = ({
  children,
  disabled,
  loading,
  reverse,
  testID,
  onPress,
}) => {
  const isDisabled = loading || disabled || !onPress;
  const styles = getStyles(colors.primaryColor, reverse, isDisabled);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        disabled={isDisabled}
        style={styles.button}
        testID={testID}
        onPress={onPress}>
        {loading ? (
          <ActivityIndicator animating color={styles.spinner.color} />
        ) : typeof children === 'string' ? (
          <Text style={styles.text}>{children}</Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    </View>
  );
};

const getStyles = StyleSheet.create((color, reverse, disabled) => ({
  container: {
    marginBottom: 10,
    opacity: disabled ? 0.5 : 1,
  },
  spinner: {
    color: reverse ? color : colors.white,
  },
  button: {
    backgroundColor: reverse ? colors.transparent : color,
    borderColor: reverse ? color : colors.transparent,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  text: {
    color: reverse ? color : colors.white,
    minHeight: 20,
    textAlign: 'center',
  },
}));
