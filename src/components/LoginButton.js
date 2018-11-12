import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Image, Menu} from 'semantic-ui-react'

class LoginButton extends Component {
  render() {
    const { user } = this.props

    if (user === undefined) {
      return (
        <Menu.Item
          as='a'
          name='login'
        />
      )
    }

    const { name, avatarURL } = user
    return (
      <Fragment>
        <Menu.Item>
          <span>
            Hello, {name}
          </span>
          <Image
            src={avatarURL}
            floated='right'
            avatar />
        </Menu.Item>
        <Menu.Item
          as='a'
          name='logout'
        />
      </Fragment>
    )
  }
}

function mapStateToProps ({authedUser, users}) {
  return {
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(LoginButton)