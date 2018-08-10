import { css } from 'styled-components'
import { zIndex, Shadow, fontStack, hexa } from '.'
import theme from '../../theme'

const returnTooltip = props => {
  switch (props.tipLocation) {
    case 'top-left':
      return `
          &:after {
            bottom: calc(100% + 4px);
            right: 0;
          }
          &:before {
            bottom: 100%;
            right: 0;
            transform: translateX(-100%);
            border-bottom-width: 0;
            border-top-color: ${
  props.onboarding ? theme.brand.alt : theme.bg.reverse
};
          }
      `
    case 'top-right':
      return `
          &:after {
            bottom: calc(100% + 4px);
            left: 0;
          }
          &:before {
            bottom: 100%;
            left: 0;
            transform: translateX(100%);
            border-bottom-width: 0;
            border-top-color: ${
  props.onboarding ? theme.brand.alt : theme.bg.reverse
};
          }
      `
    case 'top':
      return `
          &:after {
            bottom: calc(100% + 8px);
            left: 50%;
            transform: translateX(-50%);
          }
          &:before {
            bottom: calc(100% + 3px);
            left: 50%;
            transform: translateX(-50%);
            border-bottom-width: 0;
            border-top-color: ${
  props.onboarding ? theme.brand.alt : theme.bg.reverse
};
          }
      `
    case 'right':
    default:
      return `
          &:after {
            top: 50%;
            left: calc(100% + 4px);
            transform: translateY(-50%);
          }
          &:before{
            top: calc(50% - 5px);
            left: 100%;
            border-left-width: 0;
            border-right-color: ${
  props.onboarding ? theme.brand.alt : theme.bg.reverse
};
          }
      `
    case 'bottom-left':
      return `
          &:after {
            top: calc(100% + 4px);
            right: 0;
          }
          &:before {
            top: 100%;
            right: 0;
            transform: translateX(-100%);
            border-top-width: 0;
            border-bottom-color: ${
  props.onboarding ? theme.brand.alt : theme.bg.reverse
};
          }
      `
    case 'bottom-right':
      return `
          &:after {
            top: calc(100% + 4px);
            left: 0;
          }
          &:before {
            top: 100%;
            left: 0;
            transform: translateX(100%);
            border-top-width: 0;
            border-bottom-color: ${
  props.onboarding ? theme.brand.alt : theme.bg.reverse
};
          }
      `
    case 'bottom':
      return `
        &:after {
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
        }
        &:before {
          top: calc(100% + 3px);
          left: 50%;
          transform: translateX(-50%);
          border-top-width: 0;
          border-bottom-color: ${
  props.onboarding ? theme.brand.alt : theme.bg.reverse
};
        }
      `
    case 'left':
      return `
          &:after {
            right: calc(100% + 4px);
            top: 50%;
            transform: translateY(-50%);
          }
          &:before{
            right: 100%;
            top: calc(50% - 5px);
            border-right-width: 0;
            border-left-color: ${
  props.onboarding ? theme.brand.alt : theme.bg.reverse
};
          }
      `
  }
}

export default props => css`
  position: relative;

  &:after,
  &:before {
    line-height: 1;
    user-select: none;
    pointer-events: none;
    position: absolute;
    opacity: 0;
    display: block;
    text-transform: none;
  }

  &:before {
    content: '';
    z-index: ${zIndex.tooltip + 1};
    border: 6px solid transparent;
  }

  &:after {
    content: ${props.tipText && !props.onboarding
      ? `'${CSS.escape(props.tipText)}'`
      : "''"};
    z-index: ${zIndex.tooltip};
    ${fontStack};
    font-size: 14px;
    font-weight: 500;
    min-width: 8px;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: ${Shadow.mid} ${hexa(theme.bg.reverse, 0.25)};
    background: ${theme.bg.reverse};
    color: ${theme.text.reverse};
  }

  ${props.tipText && !props.onboarding ? returnTooltip(props) : ''};

  &:hover:after,
  &:hover:before {
    opacity: 1,
    transition: opacity 0.1s ease-in 0.1s;
  }
`