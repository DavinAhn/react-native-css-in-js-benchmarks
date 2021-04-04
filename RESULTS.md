# CSS in JS Benchmarks
## for React Native


### Results

#### Sorted by rerender time

Lib | Variation | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :---
[react-native](https://github.com/facebook/react-native) (v0.63.4) | [inline-only](src/components/benchmarks/react-native/inline-only/index.js) | 342 | 163
[react-native](https://github.com/facebook/react-native) (v0.63.4) | [stylesheet](src/components/benchmarks/react-native/stylesheet/index.js) | 372 | 173
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [simple](src/components/benchmarks/fela/simple/index.js) | 323 | 177
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [inline](src/components/benchmarks/fela/inline/index.js) | 433 | 181
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [inline](src/components/benchmarks/styled-components/inline/index.js) | 477 | 254
[fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native) (v11.6.1) | [primitives](src/components/benchmarks/fela/primitives/index.js) | 495 | 268
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [simple](src/components/benchmarks/styled-components/simple/index.js) | 557 | 286
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [inline](src/components/benchmarks/glamorous/inline/index.js) | 667 | 289
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [props](src/components/benchmarks/glamorous/props/index.js) | 602 | 290
[glamorous-native](https://github.com/robinpowered/glamorous-native) (v2.0.0) | [simple](src/components/benchmarks/glamorous/simple/index.js) | 566 | 292
[styled-components](https://github.com/styled-components/styled-components) (v5.2.3) | [decoupled-cell](src/components/benchmarks/styled-components/decoupled-cell/index.js) | 587 | 301
