import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleVoteOnQuestion} from '../actions/questions'
import {Button, Grid, Card, Form, Divider, Image, Radio} from 'semantic-ui-react'

class VoteQuestion extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  handleSubmit = (e) => {
    e.preventDefault()

    const { dispatch, question } = this.props
    const { value } = this.state

    dispatch(handleVoteOnQuestion(question.id, value))
  }

  render () {
    const { question, author } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { name, avatarURL } = author
    const { optionOne, optionTwo } = question

    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }}>
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
                  <Grid.Column width={11} textAlign='left'>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Field>
                        <h4>Would you rather...</h4>
                      </Form.Field>
                      <Form.Field>
                        <Radio
                          name='question'
                          label={optionOne.text}
                          value='optionOne'
                          checked={this.state.value === 'optionOne'}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Radio
                          name='question'
                          label={optionTwo.text}
                          value='optionTwo'
                          checked={this.state.value === 'optionTwo'}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Divider hidden />
                      <Button
                        disabled={this.state.value === undefined}
                        basic
                        color='teal'
                        style={{ width: '100%' }}>
                        Submit
                      </Button>
                    </Form>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps ({questions, users, authedUser}, {id}) {
  const question = questions[id]
  const author = question ? users[question.author] : null

  return {
    question,
    author,
    authedUser,
  }
}

export default connect(mapStateToProps)(VoteQuestion)