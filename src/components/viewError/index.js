// @flow
import * as React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Button from '../button'

const FillSpaceError = styled.div`
  display: flex;
  flex: auto;
  background: theme.bg.default;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: stretch;
  text-align: center;
  padding: ${p => (p.small ? '16px 12px' : '32px 24px')};
  border-radius: 12px;
`

const LargeEmoji = styled.span`
  text-align: center;
  display: block;
  font-size: ${p => (p.small ? '32px' : '56px')};
  margin-bottom: ${p => (p.small ? '16px' : '24px')};
  line-height: 1;
`

const Heading = styled.h3`
  font-size: ${p => (p.small ? '18px' : '24px')};
  font-weight: ${p => (p.small ? '500' : '600')};
  color: ${theme.text.default};
  max-width: 600px;
  margin-bottom: 8px;
`

const Subheading = styled.h4`
  font-size: ${p => (p.small ? '14px' : '18px')};
  font-weight: ${p => (p.small ? '400' : '500')};
  line-height: 1.4;
  color: ${theme.text.alt};
  max-width: 540px;
  margin-bottom: ${p => p.small ? '16px' : '32px'};
`

type Props = {
  emoji?: string,
  heading?: string,
  subheading?: string,
  refresh?: boolean,
  children?: React.Node,
  small?: boolean
}

class ViewError extends React.Component<Props> {
  render () {
    const {
      heading,
      subheading,
      refresh,
      emoji,
      children,
      small
    } = this.props

    const moji = emoji || '😌'
    const head = heading || '啊哦，出错了'
    const subhead = subheading || '要不刷新一下试试吧'

    return (
      <FillSpaceError small={small}>
        <LargeEmoji small={small} role='img' aria-label='Emoji'>
          {moji}
        </LargeEmoji>
        <Heading small={small}>{head}</Heading>
        <Subheading small={small}>{subhead}</Subheading>

        {refresh && (
          <Button
            large={!small}
            icon='view-reload'
            onClick={() => window.location.reload(true)}
          >
            Refresh
          </Button>
        )}

        {children}
      </FillSpaceError>
    )
  }
}

export default ViewError

