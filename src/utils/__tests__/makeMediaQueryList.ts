import '../../lib/__test__/useBreakpoints.mock'
import makeMediaQueryList from '../makeMediaQueryList'

describe('Generates media query listeners', () => {
  const providedBreakPointsAreNumbers = [
    window.matchMedia('(min-width: 300px) and (max-width: 500px)'),
    window.matchMedia('(min-width: 500px) and (max-width: 800px)'),
    window.matchMedia('(min-width: 800px) and (max-width: 1200px)'),
    window.matchMedia('(min-width: 1200px) ')
  ]

  const providedBreakPointsAreStrings = [
    window.matchMedia('(min-width: 300em) and (max-width: 500px)'),
    window.matchMedia('(min-width: 500px) and (max-width: 800cm)'),
    window.matchMedia('(min-width: 800cm) and (max-width: 1200rem)'),
    window.matchMedia('(min-width: 1200rem) ')
  ]

  it('Should create an array of mediaQueries with an array of type numbers', () => {
    const expected = JSON.stringify(makeMediaQueryList([300, 500, 800, 1200]))
    const received = JSON.stringify(providedBreakPointsAreNumbers)

    expect(expected).toEqual(received)
  })

  it('Should create an array of mediaQueries with an array of type strings', () => {
    const expected = JSON.stringify(
      makeMediaQueryList(['300em', '500px', '800cm', '1200rem'])
    )
    const received = JSON.stringify(providedBreakPointsAreStrings)

    expect(expected).toEqual(received)
  })
})
