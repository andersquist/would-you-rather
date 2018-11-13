import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button, Divider, Grid, Header, Segment, Form} from 'semantic-ui-react'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }
  handleChange = (e) => {
    const option = e.target.name
    const value = e.target.value
    this.setState(() => ({
      [option]: value,
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch, history } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
    }))

    history.push('/')
  }
  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }} verticalAlign='middle'>
          <Segment.Group>
            <Segment secondary>
              <Header>Create New Question</Header>
              Complete the questions
            </Segment>
            <Segment>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <Header>Would you rather...</Header>
                  <input
                    name='optionOne'
                    onChange={this.handleChange}
                    value={optionOne}
                    placeholder='Enter option one text here' />
                </Form.Field>
                <Divider horizontal>Or</Divider>
                <Form.Field>
                  <input
                    name='optionTwo'
                    onChange={this.handleChange}
                    value={optionTwo}
                    placeholder='Enter option two text here' />
                </Form.Field>
                <Button
                  color='teal'
                  disabled={optionOne === '' || optionTwo === ''}
                >Submit</Button>
              </Form>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(connect()(NewQuestion))