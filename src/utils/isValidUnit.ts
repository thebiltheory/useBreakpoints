const units: string[] = [
  'cm',
  'mm',
  'in',
  'px',
  'pt',
  'pc',
  'em',
  'ex',
  'ch',
  'rem',
  'vw',
  'vh',
  'vmin',
  'vmax',
  '%'
]

export default function isValidUnit(breakpoint: string) {
  const unit: string[] = breakpoint.match(/(\D+)/g) || ['']

  /**
   * @todo: Customize the Erro output
   * to point to the right file and file number
   * in the stack trace
   */
  if (unit[0] === '') {
    throw new Error(`
        Breakpoint "${breakpoint}" does not have a valid length unit.
        Did you mean to add ${units.join(' | ')} ?
      `)
  }

  if (!units.includes(unit[0])) {
    throw new Error(`"${unit}" is not a valid CSS unit.`)
  }

  return true
}
