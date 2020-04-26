# useBreakpoints

> React Hook to map value/breakpoint the styled-component way.

[![NPM](https://img.shields.io/npm/v/usebreakpoints.svg)](https://www.npmjs.com/package/usebreakpoints) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
  ['sad', 'neutral', 'happy', 'rocket'],
  [576, 768, 992, 1200]
)

const [value, currentBreakpoint] = useBreakpoints(
  [1, 2, 3, 4],
  [576, 768, 992, 1200]
)
```

## License

MIT © [TheBilTheory](https://github.com/TheBilTheory)
