// @flow
import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import Tooltip from '../globals/tooltip'
import theme from '../../theme'

type Props = {
  glyph: string,
  size?: number | string,
  tipText?: string,
  tipLocation?: string,
  count?: ?string,
  onClick?: Function,
  onboarding?: string
}

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  min-height: ${props => (props.size ? `${props.size}px` : '32px')};
  min-width: ${props => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  color: inherit;

  ${props => (props.tipText ? Tooltip(props) : '')};

  ${props =>
    props.count &&
    css`
      background-color: transparent;
      &:after {
        content: ${props.count ? `'${props.count}'` : `''`};
        position: absolute;
        left: calc(100% - 12px);
        top: -2px;
        font-size: 14px;
        font-weight: 600;
        background: ${theme.bg.default};
        color: ${theme.text.default};
        border-radius: 8px;
        padding: 2px 4px;
        border: 2px solid; ${theme.text.default};
      }
    `}
`

type GlyphProps = {
  glyph: string
}

export const Glyph = ({ glyph }: GlyphProps) => {
  switch (glyph) {
    case 'attachment':
      return (
        <g>
          <path d='M7.17,21.67c-1.381,2.392 -0.562,5.45 1.83,6.83c2.391,1.381 5.449,0.562 6.83,-1.83l4,-6.928l1,-1.732l4,-6.928c1.381,-2.392 0.561,-5.45 -1.83,-6.83c-2.392,-1.381 -5.45,-0.562 -6.83,1.83l-0.5,0.866c-0.276,0.478 -0.113,1.09 0.366,1.366c0.478,0.276 1.09,0.112 1.366,-0.366l0.5,-0.866c0.828,-1.435 2.663,-1.927 4.098,-1.098c1.435,0.828 1.926,2.663 1.098,4.098l-0.5,0.866l-3.5,6.062l-1,1.732l-4,6.928c-0.829,1.435 -2.663,1.927 -4.098,1.098c-1.435,-0.828 -1.927,-2.663 -1.098,-4.098l2,-3.464l4,-6.928c0.276,-0.478 0.887,-0.642 1.366,-0.366c0.478,0.276 0.642,0.888 0.366,1.366l-4,6.928c-0.276,0.479 -0.112,1.09 0.366,1.366c0.478,0.276 1.09,0.113 1.366,-0.366l4,-6.928c0.828,-1.435 0.337,-3.27 -1.098,-4.098c-1.435,-0.829 -3.27,-0.337 -4.098,1.098l-4,6.928l-2,3.464Z' />
        </g>
      )
  }
}

class Icon extends React.Component<Props> {
  render () {
    const {
      size = 32,
      tipText,
      tipLocation,
      onboarding,
      count,
      onClick,
      glyph
    } = this.props

    return (
      <ThemeProvider theme={theme}>
        <SvgWrapper
          size={size}
          tipText={tipText}
          tipLocation={tipLocation}
          onboarding={onboarding}
          count={count}
          className={'icon'}
          onClick={onClick}
        >
          <InlineSvg
            fillRule='evenodd'
            clipRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='1.414'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='title'
            viewBox='0 0 32 32'
            preserveAspectRatio='xMidYMid meet'
            fit
            id={glyph}
          >
            <title id='title'>{glyph}</title>
            <Glyph glyph={glyph} />
          </InlineSvg>
        </SvgWrapper>
      </ThemeProvider>
    )
  }
}

export default Icon