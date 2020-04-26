export default function getMediaQueriyList(breakpoints: number[]) {
  return breakpoints.map((breakpoint: number, index: number) => {
    const maxWidth = breakpoints[index + 1]
    return window.matchMedia(
      `(min-width: ${breakpoint}px) ${
        maxWidth ? `and (max-width: ${maxWidth - 1}px)` : ''
      }`
    )
  })
}
