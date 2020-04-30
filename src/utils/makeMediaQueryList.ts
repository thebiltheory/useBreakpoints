import { isBrowser } from './isBrowser'
import isValidUnit from './isValidUnit'

type TBreakpoint = number | string

export default function makeMediaQueryList(breakpoints: TBreakpoint[]) {
  return breakpoints.map((breakpoint: TBreakpoint, index: number) => {
    const maxWidth = breakpoints[index + 1]

    if (!isBrowser) return

    if (typeof breakpoint === 'string' && isValidUnit(breakpoint)) {
      return window.matchMedia(
        `(min-width: ${breakpoint}) ${
          maxWidth ? `and (max-width: ${maxWidth})` : ''
        }`
      )
    }

    return window.matchMedia(
      `(min-width: ${breakpoint}px) ${
        maxWidth ? `and (max-width: ${maxWidth}px)` : ''
      }`
    )
  })
}
