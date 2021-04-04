import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from 'components/common/Button';
import { Picker } from 'components/common/Picker';

export const Menu = ({
  data,
  loading,
  running,
  results,
  selectLib,
  handleRun,
  handleShowResults,
  handleLibChange,
}) => {
  const pickerRef = useRef();

  const handleOpen = useCallback(() => {
    pickerRef.current.open();
  }, [pickerRef]);

  const hasResults = useMemo(() => results && Object.keys(results).length > 0, [
    results,
  ]);

  useEffect(() => {
    handleOpen();
  }, [handleOpen]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!selectLib}
        loading={!loading && running}
        onPress={handleRun}
        testID="runButton">
        Run again
      </Button>

      <Button
        disabled={loading || running || !hasResults}
        reverse
        onPress={handleShowResults}
        testID="showResultsButton">
        Show Results
      </Button>

      <Button reverse onPress={handleOpen}>
        {selectLib ? 'Change CSS in JS lib' : 'Select CSS in JS lib'}
      </Button>

      <Picker
        ref={pickerRef}
        data={data}
        initialSelectedKey={null}
        onChange={handleLibChange}
        testID="libsPicker"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
