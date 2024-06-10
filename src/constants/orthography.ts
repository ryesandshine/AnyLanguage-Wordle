import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'd',
  'e',
  'g',
  'h',
  'i',
  'l',
  'k',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'u',
  'w',
  'y'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
