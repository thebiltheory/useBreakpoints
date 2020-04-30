import '../../lib/__test__/useBreakpoints.mock'
import isValidUnit from '../isValidUnit'

describe('Validates breakpoint strings with units', () => {
  it('Should throw an error if an invalid CSS unit is provided', () => {
    expect(() => isValidUnit('1000pxx')).toThrowError(
      `"pxx" is not a valid CSS unit.`
    )
  })

  it('Should return true if a valid CSS is provided', () => {
    expect(() => isValidUnit('1000px')).toBeTruthy()
  })
})
