import React, { Component } from 'react'
import {
  Card,
  Image,
  Grid,
  Button,
} from 'semantic-ui-react'

class Question extends Component {
  render() {
    const author  = 'Tyler McGinnis'
    const optionOne = 'have horrible short term memory'
    const id = ''
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>{author} asks:</Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  size='tiny'
                  circular
                  src='https://semantic-ui.com/images/avatar/large/matt.jpg'/>
              </Grid.Column >
              <Grid.Column>
                <h4>Would you rather</h4>
                <p>...{optionOne}...</p>
                <Button basic color='teal'>
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

export default Question