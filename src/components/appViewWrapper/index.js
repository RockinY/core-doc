// @flow
import React from 'react'
import styled from 'styled-components'
import { FlexRow } from '../globals'

const Wrapper = styled(FlexRow)`
  order: 2;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;
  flex: auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-start;
    flex-direction: column;
  }
`

const AppViewWrapperPure = (props: any) => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default AppViewWrapperPure;