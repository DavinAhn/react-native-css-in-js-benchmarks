# CSS in JS Benchmarks
## for React Native

- MacBook Pro (16inch, 2019) / 2.3GHz 8-core i9 / 32GB RAM
- iPhone 11 Simulator (iOS 13.5)
- React Native 0.63.4
- 1,000 components.
- Measure 1 mount time, rerender 10 times.

### Results (based on ScrollView)

#### Sorted by rerender time

Lib | Variation | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :---
[react-native](https://github.com/facebook/react-native) (v0.63.4) | [inline-only](src/components/benchmarks/react-native/inline-only/index.js) | 314 | 162
[react-native](https://github.com/facebook/react-native) (v0.63.4) | [stylesheet](src/components/benchmarks/react-native/stylesheet/index.js) | 334 | 162
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [simple](src/components/benchmarks/fela/simple/index.js) | 326 | 167
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [inline](src/components/benchmarks/fela/inline/index.js) | 427 | 181
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [inline](src/components/benchmarks/styled-components/inline/index.js) | 512 | 255
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [primitives](src/components/benchmarks/fela/primitives/index.js) | 490 | 257
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [decoupled-cell](src/components/benchmarks/styled-components/decoupled-cell/index.js) | 599 | 272
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [inline](src/components/benchmarks/glamorous/inline/index.js) | 627 | 278
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [simple](src/components/benchmarks/glamorous/simple/index.js) | 594 | 282
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [props](src/components/benchmarks/glamorous/props/index.js) | 582 | 289
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [simple](src/components/benchmarks/styled-components/simple/index.js) | 561 | 295

### Results (based on FlatList)

#### Sorted by rerender time

Lib | Variation | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :---
[react-native](https://github.com/facebook/react-native) (v0.63.4) | [inline-only](src/components/benchmarks/react-native/inline-only-with-flat-list/index.js) | 27 | 31
[react-native](https://github.com/facebook/react-native) (v0.63.4) | [stylesheet](src/components/benchmarks/react-native/stylesheet-with-flat-list/index.js) | 27 | 32
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [simple](src/components/benchmarks/fela/simple-with-flat-list/index.js) | 29 | 35
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [inline](src/components/benchmarks/fela/inline-with-flat-list/index.js) | 67 | 49
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [inline](src/components/benchmarks/styled-components/inline-with-flat-list/index.js) | 38 | 50
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [inline](src/components/benchmarks/glamorous/inline-with-flat-list/index.js) | 45 | 56
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [primitives](src/components/benchmarks/fela/primitives-with-flat-list/index.js) | 43 | 61
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [simple](src/components/benchmarks/glamorous/simple-with-flat-list/index.js) | 41 | 64
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [props](src/components/benchmarks/glamorous/props-with-flat-list/index.js) | 43 | 64
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [simple](src/components/benchmarks/styled-components/simple-with-flat-list/index.js) | 43 | 83
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [decoupled-cell](src/components/benchmarks/styled-components/decoupled-cell-with-flat-list/index.js) | 46 | 102
