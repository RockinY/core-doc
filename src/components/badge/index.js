// @flow
import * as React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { Gradient } from '../globals'
import Tooltip from '../globals/tooltip'

const Span = styled.span`
  color: ${theme.text.reverse};
  background-color: ${theme.text.alt};
  background-image: 'none';
  text-transform: uppercase;
  padding: 2px 4px;
  margin-left: 4px;
  font-size: 9px;
  font-weight: 800;
  border-radius: 4px;
  ${props => (props.tipText ? Tooltip(props) : '')};
  align-self: center;
  line-height: 1.4;
`

const ProBadge = styled(Span)`
  background-color: ${theme.special.default};
  background-image: ${Gradient(theme.special.alt, theme.special.default)};
  cursor: pointer;
`

type Props = {
  type: string,
  onClick?: Function,
  tipText?: string
}

class Badge extends React.Component<Props> {
  render() {
    const { type } = this.props
    switch (type) {
      case 'pro':
        return (
          <ProBadge
            type={type}
            tipText={this.props.tipText}
            tipLocation={'top-left'}
            onClick={this.props.onClick && this.props.onClick}
          >
            PRO
          </ProBadge>
        )
      default:
        return (
          <Span
            type={type}
            tipText={this.props.tipText}
            tipLocation={'top-left'}
            onClick={this.props.onClick && this.props.onClick}
          >
            {type}
          </Span>
        )
    }
  }
}

export default Badge