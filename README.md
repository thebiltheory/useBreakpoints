# useBreakpoints

[![CircleCI](https://circleci.com/gh/thebiltheory/useBreakpoints/tree/master.svg?style=svg)](https://circleci.com/gh/thebiltheory/useBreakpoints/tree/master) [![NPM](https://img.shields.io/npm/v/usebreakpoints.svg)](https://www.npmjs.com/package/@thebiltheory/usebreakpoints) ![npm](https://img.shields.io/npm/v/@thebiltheory/usebreakpoints?color=%236820FE) ![npm](https://img.shields.io/npm/dm/@thebiltheory/usebreakpoints)

React Hook to map value/breakpoint the styled-component way.

## Example/ Demo

[![Edit useBreakpoints](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/amazing-edison-x9g17?fontsize=14&hidenavigation=1&theme=dark)

## Install

```bash
npm install --save @thebiltheory/usebreakpoints
```

or

```bash
yarn add @thebiltheory/usebreakpoints
```

## Usage

```tsx
const [value, currentBreakpoint] = useBreakpoints(
  ['mobile', 'tablet', 'desktop', 'huge screen'],
  [576, 768, 992, 1600]
)

const [value, currentBreakpoint] = useBreakpoints(
  [1, 2, 3, 4],
  ['576px', '768px', '992px', '1200px']
)

import theme from 'src/theme'
const [value, currentBreakpoint] = useBreakpoints(
  [1, 2, 3, 4],
  theme.breakpoints
)
```

## License

MIT © [TheBilTheory](https://github.com/TheBilTheory)
