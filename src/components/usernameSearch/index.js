// @flow
import * as React from 'react'
import Spinner from '../globals/spinner'
import { Input, Loading } from './style'

type Props = {
  username?: string,
  label?: string,
  isSearching?: boolean,
  size?: string,
  placeholder?: string
}

class UsernameSearch extends React.Component<Props> {
  render() {
    const { label, size, username, isSearching } = this.props;
    return (
      <React.Fragment>
        <Input
          {...this.props}
          defaultValue={username}
        >
          {label && label}
          {isSearching && (
            <Loading size={size}>
              <Spinner size={16} color={'brand.default'} />
            </Loading>
          )}
        </Input>
      </React.Fragment>
    )
  }
}

export default UsernameSearch