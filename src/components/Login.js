import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, Segment, Button, Dropdown, Divider, Header, Image } from 'semantic-ui-react'

class Login extends Component {
  render() {
    console.log(this.props)

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
              <Button color='teal'>Sign In</Button>
              <Divider hidden />
              <Dropdown placeholder='Select User' fluid selection options={options}/>
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