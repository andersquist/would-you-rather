import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, Segment, Button, Dropdown, Divider, Header, Image } from 'semantic-ui-react'
import {setAuthedUser} from '../actions/authUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    userId: null,
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { userId } = this.state
    const { dispatch } = this.props

    dispatch(setAuthedUser(userId))

    this.setState(() => ({
      toHome: true,
    }))
  }
  handleChange = (e, { value }) => {
    this.setState({ userId: value })
  }

  render() {
    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    const { users } = this.props

    const options = Object.keys(users)
      .map((id) => ({
        text: users[id].name,
        value: id,
        image: { avatar: true, src: users[id].avatarURL },
      }))
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }} verticalAlign='middle'>
          <Segment.Group>
            <Segment secondary>
              <Header>Welcome to the Would you rather App!</Header>
              Please sign in to continue.
            </Segment>
            <Segment>
              <Image src='https://react.semantic-ui.com/logo.png' centered size='small'/>
              <Divider hidden />
              <form onSubmit={this.handleSubmit}>
                <Button
                  color='teal'
                  disabled={this.state.userId === null}
                >Sign In</Button>
                <Divider hidden />
                <Dropdown
                  placeholder='Select User'
                  fluid
                  selection
                  options={options}
                  onChange={this.handleChange}
                />
              </form>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Login)