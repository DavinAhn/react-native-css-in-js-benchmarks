# CSS in JS Benchmarks

## for React Native

This project was developed by copying [brunolemos/react-native-css-in-js-benchmarks](https://github.com/brunolemos/react-native-css-in-js-benchmarks).

Updated the library version from the original as shown below.

- fela: `6.1.8` -> `11.6.1`
- fela-native: `5.0.21` -> `11.6.1`
- fela-tools: `5.1.6` -> `11.6.1`
- glamorous-native: `1.4.0` -> `2.0.0`
- hoist-non-react-statics: `2.5.4` -> `3.3.2`
- react: `16.4.1` -> `16.13.1`
- react-fela: `7.3.0` -> `11.6.1`
- react-native: `0.55.4` -> `0.63.4`
- styled-components: `3.3.2` -> `5.2.3`

### Results

See [RESULTS.md](RESULTS.md) for the benchmark results.

### Technique

- Big table with random data and dynamic background color opacity
- Multiple implementations for each lib with small variations, e.g. using inline styles or not
- Multiple rerenders are executed per test and the result is their average render time

### Libs

- [fela-native](https://github.com/rofrischmann/fela/tree/master/packages/fela-native)
- [glamorous-native](https://github.com/robinpowered/glamorous-native)
- [react-native](https://github.com/facebook/react-native)
- [styled-components](https://github.com/styled-components/styled-components)

### Inspiration

The idea and some code pieces are heavily inspired by [A-gambit/CSS-IN-JS-Benchmarks](https://github.com/A-gambit/CSS-IN-JS-Benchmarks), which benchmarks were made for React Web.

### How to run

- Run `git clone git@github.com:DavinAhn/react-native-css-in-js-benchmarks.git`
- Run `yarn` or `npm install`
- Run `react-native run-ios`
- Use the app as usual
