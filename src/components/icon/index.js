// @flow
import React from 'react'
import styled, { css } from 'styled-components'
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
    case 'view-reload':
      return (
        <g>
          <path d='M20.726,14.162c-0.776,-2.415 -3.04,-4.162 -5.713,-4.162c-3.314,0 -6,2.686 -6,6c0,3.314 2.686,6 6,6c2.063,0 3.883,-1.041 4.962,-2.626c0.333,-0.489 0.988,-0.707 1.497,-0.406c0.437,0.26 0.611,0.814 0.342,1.246c-1.411,2.273 -3.929,3.786 -6.801,3.786c-4.418,0 -8,-3.582 -8,-8c0,-4.418 3.582,-8 8,-8c3.53,0 6.525,2.286 7.588,5.458c0.278,-0.429 0.537,-0.848 0.736,-1.175c0.108,-0.178 0.196,-0.324 0.258,-0.428l0.042,-0.07l0.029,-0.05l0.018,-0.03l0.005,-0.008l0.001,-0.002c0.279,-0.476 0.892,-0.636 1.368,-0.357c0.477,0.279 0.636,0.892 0.357,1.369l-0.001,0.001l-0.001,0.002l-0.005,0.009l-0.02,0.034c-0.017,0.028 -0.043,0.072 -0.075,0.125l-0.062,0.105l-0.015,0.025l-0.084,0.139c-0.033,0.055 -0.069,0.114 -0.107,0.176c-0.222,0.365 -0.528,0.86 -0.849,1.35c-0.32,0.49 -0.676,1.006 -0.978,1.389c-0.157,0.198 -0.336,0.402 -0.482,0.54c-0.084,0.077 -0.217,0.181 -0.316,0.243c-0.103,0.062 -0.357,0.201 -0.695,0.178c-0.202,-0.013 -0.369,-0.08 -0.447,-0.113c-0.083,-0.035 -0.195,-0.091 -0.283,-0.141c-0.164,-0.092 -0.372,-0.224 -0.575,-0.363c-0.399,-0.272 -0.884,-0.633 -1.337,-0.98c-0.453,-0.348 -0.892,-0.697 -1.214,-0.954c-0.162,-0.13 -0.296,-0.239 -0.389,-0.314l-0.108,-0.088l-0.029,-0.024l-0.007,-0.006l-0.002,-0.001l-0.001,-0.001c-0.427,-0.35 -0.489,-0.98 -0.139,-1.407c0.35,-0.428 0.98,-0.489 1.407,-0.139l0.036,0.029l0.104,0.085c0.091,0.074 0.221,0.178 0.379,0.305c0.317,0.255 0.74,0.59 1.181,0.928c0.143,0.11 0.285,0.218 0.425,0.323Z' />
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
    )
  }
}

export default Icon