import './useBreakpoints.mock'
import { renderHook } from '@testing-library/react-hooks'
import useBreakpoints from '../useBreakpoints'

describe('useBreakpoints', () => {
  it('Should return values for desktop breakpoint', () => {
    const { result } = renderHook(() =>
      useBreakpoints([1, 2, 3, 4], [576, 768, 992, 1200])
    )

    expect(result.current[0]).toBe(4)
    expect(result.current[1]).toBe(1200)
  })

  it('Should return values for mobile breakpoint', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500
    })

    const { result } = renderHook(() =>
      useBreakpoints([1, 2, 3, 4], [576, 768, 992, 1200])
    )

    expect(result.current[0]).toBe(1)
    expect(result.current[1]).toBe(576)
  })

  it('Should return values for tablet breakpoint', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800
    })

    const { result } = renderHook(() =>
      useBreakpoints([1, 2, 3, 4], [576, 768, 992, 1200])
    )

    expect(result.current[0]).toBe(3)
    expect(result.current[1]).toBe(992)
  })
})
