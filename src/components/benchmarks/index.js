// all benchmarks
import { TableComponent as FelaInlineTable } from 'components/benchmarks/fela/inline';
import { TableComponent as FelaPrimitivesTable } from 'components/benchmarks/fela/primitives';
import { TableComponent as FelaSimpleTable } from 'components/benchmarks/fela/simple';
import { TableComponent as GlamorousInlineTable } from 'components/benchmarks/glamorous/inline';
import { TableComponent as GlamorousPropsTable } from 'components/benchmarks/glamorous/props';
import { TableComponent as GlamorousSimpleTable } from 'components/benchmarks/glamorous/simple';
import { TableComponent as ReactNativeInlineOnlyTable } from 'components/benchmarks/react-native/inline-only';
import { TableComponent as ReactNativeStyleSheetTable } from 'components/benchmarks/react-native/stylesheet';
import { TableComponent as StyledComponentsDecoupledCellTable } from 'components/benchmarks/styled-components/decoupled-cell';
import { TableComponent as StyledComponentsInlineTable } from 'components/benchmarks/styled-components/inline';
import { TableComponent as StyledComponentsSimpleTable } from 'components/benchmarks/styled-components/simple';

export const benchmarks = [
  FelaInlineTable,
  FelaPrimitivesTable,
  FelaSimpleTable,
  GlamorousInlineTable,
  GlamorousPropsTable,
  GlamorousSimpleTable,
  ReactNativeInlineOnlyTable,
  ReactNativeStyleSheetTable,
  StyledComponentsDecoupledCellTable,
  StyledComponentsInlineTable,
  StyledComponentsSimpleTable,
];
