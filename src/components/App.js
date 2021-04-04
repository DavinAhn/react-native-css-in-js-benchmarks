import AsyncStorage from '@react-native-community/async-storage';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Alert,
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { Benchmark } from 'components/common/Benchmark';
import { benchmarkMap } from 'components/benchmarks';
import { getTableSize, getUniqueSize } from 'utils/helpers';
import { TitleRow } from 'components/common/TitleRow';
import { SizeRow } from 'components/common/SizeRow';
import { ResultRow } from 'components/common/ResultRow';
import { Menu } from 'components/common/Menu';
import * as colors from 'utils/colors';

LogBox.ignoreAllLogs();

const mountTimeKey = 'mountTime';
const renderTimeKey = 'renderTime';
const initResult = { mountTime: null, renderTime: null };

export const App = () => {
  const [TableComponent, setTableComponent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(initResult);
  const [results, setResults] = useState(null);
  const [table, setTable] = useState([]);

  const benchmarkRef = useRef();

  const pickerData = useMemo(() => {
    return benchmarkMap.map(benchmark => ({
      key: benchmark.key,
      label: benchmark.title,
      value: { TableComponent: benchmark },
    }));
  }, []);

  const handleRun = useCallback(() => {
    setRunning(true);
    setTimeout(() => {
      benchmarkRef.current.runRenderTest();
    }, 0);
  }, []);

  const clearResults = useCallback(() => {
    setResults({});
    AsyncStorage.setItem('results', '{}');
  }, []);

  const handleShowResults = useCallback(() => {
    const items = [];

    Object.entries(results).forEach(([key, item]) => {
      const mountTime = Math.round(item[mountTimeKey] || 0);
      const renderTime = Math.round(item[renderTimeKey] || 0);

      items.push({ key, mountTime, renderTime });
    });

    const orderedItems = items
      .sort((lhs, rhs) => lhs.renderTime - rhs.renderTime)
      .map(item => `${item.key}: ${item.mountTime}, ${item.renderTime}`);

    const message = `[LIB]: [MOUNT TIME], [RENDER TIME]\n${orderedItems.join(
      '\n',
    )}`;

    Alert.alert('Results', message, [
      { text: 'OK', onPress: () => {} },
      { text: 'Reset', onPress: clearResults, style: 'destructive' },
    ]);
  }, [clearResults, results]);

  const handleLibChange = useCallback(selected => {
    const isValid = Boolean(selected && selected.TableComponent);
    setTableComponent(null);
    setLoading(isValid);
    setRunning(isValid);
    setResult(initResult);
    setTimeout(() => {
      if (isValid) {
        setTableComponent(() => selected.TableComponent);
        setLoading(false);
      }
    }, 0);
  }, []);

  const saveResults = useCallback(
    (key, value, callback = () => {}) => {
      results[TableComponent.key] = {
        ...results[TableComponent.key],
        [key]: value,
      };
      const change = results;
      setResults(change);
      (async () => {
        await AsyncStorage.setItem('results', JSON.stringify(change));
        callback();
      })();
    },
    [results, TableComponent],
  );

  const handleMountTime = useCallback(
    value => {
      saveResults(mountTimeKey, value, () => {
        setResult({ ...result, mountTime: value });
      });
    },
    [result, saveResults],
  );

  const handleGetRenderTime = useCallback(
    value => {
      saveResults(renderTimeKey, value, () => {
        setResult({ ...result, renderTime: value });
        setRunning(false);
      });
    },
    [result, saveResults],
  );

  useEffect(() => {
    setLoading(true);
    (async () => {
      const item = await AsyncStorage.getItem('results');
      setResults((item && JSON.parse(item)) || {});
      setLoading(false);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.innerContainer}>
        <TitleRow title={!!TableComponent && TableComponent.title} />
        {!!TableComponent && (
          <SizeRow
            uniqueSize={getUniqueSize(table)}
            tableSize={getTableSize(table)}
          />
        )}
        <View style={styles.tableContainer}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color={styles.spinner.color} />
            </View>
          ) : !TableComponent ? null : (
            <Benchmark
              ref={benchmarkRef}
              key={`benchmark-${TableComponent.key}`}
              TableComponent={TableComponent}
              onGenerateTable={setTable}
              onGetMountTime={handleMountTime}
              onGetRenderTime={handleGetRenderTime}
            />
          )}
        </View>
        <ResultRow
          mountTime={result.mountTime}
          renderTime={result.renderTime}
        />
        {Boolean(result.renderTime > 0 && !running && !loading) && (
          <View testID="benchmarkHasFinishedRunning" />
        )}
        <Menu
          data={pickerData}
          loading={loading}
          running={running}
          results={results}
          selectLib={!!TableComponent}
          handleRun={handleRun}
          handleShowResults={handleShowResults}
          handleLibChange={handleLibChange}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    color: colors.primaryColor,
  },
});
