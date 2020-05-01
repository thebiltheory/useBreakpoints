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

  if (!units.includes(unit[0])) {
    throw new Error(`"${unit}" is not a valid CSS unit.`)
  }

  return true
}
