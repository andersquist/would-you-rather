import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Image,
  Grid,
  Button,
  Divider,
} from 'semantic-ui-react'

class Question extends Component {
  render() {
    const { author, question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { name, avatarURL } = author
    const { optionOne } = question
    const { text } = optionOne
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>{name} asks:</Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image
                  size='tiny'
                  circular
                  src={avatarURL}/>
              </Grid.Column >
              <Grid.Column width={11}>
                <h4>Would you rather</h4>
                <p>...{text}...</p>
                <Divider hidden />
                <Button basic color='teal' style={{ width: '100%' }}>
                  View Poll
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]
  const author = question ? users[question.author] : null

  return {
    question,
    author,
  }
}

export default connect(mapStateToProps)(Question)