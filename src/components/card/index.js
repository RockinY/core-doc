// @flow
import React from 'react'
import styled from 'styled-components'
import { FlexCol } from '../globals'
import theme from '../../theme'

const StyledCard = styled(FlexCol)`
  background: ${theme.bg.default};
  position: relative;
  width: 100%;
  max-width: 100%;
  background-clip: padding-box;
  overflow: visible;
  flex: none;

  + div,
  + span {
    margin-top: 16px;

    @media (max-width: 768px) {
      border-radius: 0;
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
  }
`

const CardPure = (props: Object) => {
  return (
    <StyledCard {...props}>
      {props.children}
    </StyledCard>
  )
}

export default CardPure