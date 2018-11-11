import React, { Component } from 'react'
import Question from './Question'
import {
  Card, } from 'semantic-ui-react'

class ListQuestions extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={1}>
        {[1,2,3].map((id) => (
          <Question key={id}/>
        ))}
      </Card.Group>
    )
  }
}

export default ListQuestions