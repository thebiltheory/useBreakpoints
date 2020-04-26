# useBreakpoints

> React hook for have a styled-component ish way of setting values

[![NPM](https://img.shields.io/npm/v/usebreakpoints.svg)](https://www.npmjs.com/package/usebreakpoints) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save usebreakpoints
```

or

```bash
yarn add usebreakpoints
```

## Usage

```tsx
const [componentId, currentBreakpoint] = useBreakpoints(
  ['sad', 'neutral', 'happy', 'rocket'],
  [576, 768, 992, 1200]
)
```

## License

MIT © [TheBilTheory](https://github.com/TheBilTheory)
