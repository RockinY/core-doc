// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { zIndex, Gradient } from '../globals'
import theme from '../../theme'

const Container = styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 256px;
  background: transparent;
  pointer-events: none;
  z-index: ${zIndex.toast};
`

const Toast = styled.div`
  border-radius: 8px;
  padding: 8px 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  display: block;
  margin-bottom: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`

export const ErrorToast = styled(Toast)`
  background-color: ${theme.warn.default};
  background-image: ${Gradient(theme.warn.alt, theme.warn.default)};
`

export const SuccessToast = styled(Toast)`
  background-color: ${theme.success.default};
  background-image: ${Gradient(theme.success.alt, theme.success.default)};
`

export const NeutralToast = styled(Toast)`
  background-color: ${theme.text.alt};
  background-image: ${Gradient(theme.text.placeholder, theme.text.alt)};
`