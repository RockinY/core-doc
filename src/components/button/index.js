import React from 'react'
import styled, { css } from 'styled-components'
import {
  Transition,
  Shadow,
  hexa,
  Gradient,
  generateColor,
  pickColor
} from '../globals'
import theme from '../../theme'
import Spinner from '../globals/spinner'
import Icon from '../icon'

const baseButton = css`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  transition: ${Transition.hover.off};
  cursor: pointer;
  font-size: ${props => (props.large ? '18px' : '14px')};
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props =>
    props.icon
      ? props.large ? '8px 12px' : '4px 8px'
      : props.large ? '16px 32px' : '12px 16px'};
  
  &:hover {
    transition: ${Transition.hover.on};
    box-shadow: ${props =>
      props.disabled
        ? 'none'
        : `${Shadow.high} ${hexa(theme.bg.reverse, 0.15)}`};
    opacity: ${props => (props.disabled ? '0.5' : '1')};
  }

  div + span,
  span + span {
    margin: 0 8px;
  }
`

const StyledSolidButton = styled.button`
  ${baseButton}
  background-color: ${props =>
    props.disabled
      ? theme.bg.inactive
      : props.color ? generateColor(props.color) : theme.brand.alt};
  background-image: ${props =>
    props.disabled || props.gradientTheme === 'none'
      ? 'none'
      : props.gradientTheme
        ? Gradient(
          pickColor(props.gradientTheme, 'alt'),
          pickColor(props.gradientTheme, 'default')
        )
        : Gradient(theme.brand.alt, theme.brand.default)};
  color: ${theme.text.reverse};

  &:hover {
    background-color: ${props =>
      props.disabled
        ? theme.bg.inactive
        : props.hoverColor ? generateColor(props.hoverColor) : theme.brand.alt};
  }

  &:active {
    box-shadow: ${props =>
      props.disabled
        ? 'none'
        : `${Shadow.low} ${hexa(theme.bg.reverse, 0.15)}`};
  }
`

const SpinnerContainer = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`

const Label = styled.span`
  display: block;
  flex: 0 0 auto;
  line-height: inherit;
  color: inherit;
  ${props => (props.loading && !props.hasIcon ? 'opacity: 0;' : 'opacity: 1;')};
  align-self: center;
  margin: auto;
`

type ButtonProps = {
  loading?: boolean,
  disabled?: boolean,
  large?: boolean,
  color?: string,
  gradientTheme?: string,
  icon?: string,
  children?: any,
  dataCy?: string
}

const Button = (props: ButtonProps) => (
  <StyledSolidButton disabled={props.loading} {...props}>
    {props.icon ? (
      props.loading ? (
        <SpinnerContainer>
          <Spinner color='text.reverse' size='16' />
        </SpinnerContainer>
      ) : (
        <Icon glyph={props.icon} />
      )
    ) : (
      ''
    )}
    {props.loading && !props.icon && <Spinner color='text.reverse' size='16' />}
    <Label loading={props.loading} hasIcon={props.icon}>
      {props.children}
    </Label>
  </StyledSolidButton>
)

export default Button;