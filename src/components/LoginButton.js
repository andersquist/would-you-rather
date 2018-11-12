import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {Image, Menu} from 'semantic-ui-react'
import {setAuthedUser} from '../actions/authUser'

class LoginButton extends Component {
  handleLogout = () => {
    const { dispatch } = this.props

    dispatch(setAuthedUser(null))

  }
  render() {
    const { user } = this.props

    if (user === undefined) {
      return (
        null
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
          as={NavLink}
          to='/login'
          onClick={this.handleLogout}
          active={false}
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