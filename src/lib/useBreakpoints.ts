import { useEffect, useCallback, useState } from 'react'
import {
  TMediaHandler,
  TValuesParam,
  TBreakPointsParam
} from './useBreakpoints.interface'
import makeMediaQueryList from '../utils/makeMediaQueryList'

/**
 * useBreakpoint
 *
 * @param {*} values
 * @param {*} breakdpoints
 *
 * Documentation:
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 */
export default function useBreakpoints(
  values: TValuesParam,
  breakdpoints: TBreakPointsParam
) {
  const [value, setValue] = useState<string | number>()
  const [breakdpoint, setBreakpoint] = useState(0)

  const mediaQueryList = makeMediaQueryList(breakdpoints)

  /**
   * Keep hold of the listeners
   * to remove them on unmount.
   */
  const mediaHandlers: TMediaHandler[] = []

  const mediaHandler = useCallback(
    (index: number): TMediaHandler => {
      return (e: MediaQueryListEvent) => {
        if (!e.matches) return
        setBreakpoint(breakdpoints[index])
        setValue(values[index])
      }
    },
    [breakdpoints, values]
  )

  useEffect(() => {
    const initial = breakdpoints.findIndex(
      (breakpoint: number) => window.innerWidth < breakpoint
    )

    if (initial === -1) {
      setBreakpoint(breakdpoints[breakdpoints.length - 1])
      setValue(values[breakdpoints.length - 1])
    } else {
      setBreakpoint(breakdpoints[initial])
      setValue(values[initial])
    }
  }, [])

  useEffect(() => {
    mediaQueryList.forEach((mediaQuery: any, index: any) => {
      mediaQuery.addListener(mediaHandler(index))
      mediaHandlers.push(mediaHandler(index))
    })

    return () => {
      mediaQueryList.forEach((mediaQuery: any, index: any) =>
        mediaQuery.removeListener(mediaHandlers[index])
      )
    }
  }, [values, breakdpoints])

  return [value, breakdpoint]
}
