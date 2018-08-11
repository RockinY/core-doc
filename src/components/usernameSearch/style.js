// @flow
import React from 'react'
import styled from 'styled-components'
import { Transition } from '../globals'
import theme from '../../theme'

export const Loading = styled.span`
  position: absolute;
  left: calc(100% - 24px);
  top: ${p => (p.size === 'small' ? 'calc(50% + 12px' : '50%')};
`

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.4px;
  color: ${theme.text.default};
  transition: ${Transition.hover.off};
  position: relative;
  margin-top: ${p => (p.size === 'small' ? '12px' : 0)};

  &:hover > input {
    border-color: ${p => {p.disabled ? theme.bg.border : theme.text.alt}};
    transition: ${Transition.hover.on};
  }

  &:hover > input:focus {
    border-color: ${p => p.disabled ? theme.bg.inactive : theme.brand.alt};
  }
`

export const StyledInput = styled.input`
  flex: 1 0 auto;
  background: ${p => p.disabled ? theme.bg.wash : theme.bg.default};
  font-weight: 500;
  width: 100%;
  font-size: ${p => p.size === 'small' ? '14px' : '18px'};
  border: 2px solid ${p => p.disabled ? theme.bg.border : theme.bg.inactive};
  border-radius: ${p => (p.size === 'small' ? '8px 12px' : '12px 24px')};
  padding: ${p => (p.size === 'small' ? '8px 12px' : '12px 24px')};
  margin-top: 2px;
  text-align: ${p => (p.size === 'small' ? 'left' : 'center')};
  box-shadow: none;
  transition: ${Transition.hover.off};

  &::placeholder,
  &::-webkit-input-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder {
    color: ${theme.text.placeholder};
  }
  
  &:focus {
    border-color: ${theme.brand.default};
    transition: ${Transition.hover.on};
  }
`

export const Input = (props: Object) => {
  return (
    <StyledLabel {...props}>
      {props.children}
      <StyledInput
        id={props.id}
        type={props.inputType}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        size={props.size}
      >
      </StyledInput>
    </StyledLabel>
  )
}