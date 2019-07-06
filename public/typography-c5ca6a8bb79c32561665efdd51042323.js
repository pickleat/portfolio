import Typography from "typography"
import moragaTheme from 'typography-theme-moraga'

moragaTheme.baseFontSize = '18px'
moragaTheme.headerWeight = 700

const typography = new Typography(moragaTheme)

export const { scale, rhythm, options } = typography
export default typography