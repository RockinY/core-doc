import { css } from 'styled-components'
import theme from '../../theme'

export const Transition = {
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out'
  },
  reaction: {
    on: 'all 0.15s ease-in',
    off: 'all 0.1s ease-out'
  },
  dropdown: {
    off: 'all 0.35s ease-out'
  }
}

export const Shadow = {
  low: '0 2px 8px',
  mid: '0 4px 12px',
  high: '0 8px 16px'
}

export const hexa = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const Gradient = (g1, g2) => {
  return css`radial-gradient(ellipse farthest-corner at top left, ${g1} 0%, ${g2} 100%)`
}

export const zIndex = new function () {
  this.toast = 6000
  this.tooltip = this.toast + 1
}

export const fontStack = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Segoe', sans-serif;
`

export const pickColor = (group: string, item: string) => {
  return theme[group][item]
}

export const generateColor = (color: string) => {
  const [group, item] = color.split('.')
  return pickColor(group, item)
}

export default FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export default FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`