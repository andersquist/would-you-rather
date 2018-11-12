import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Card, Message } from 'semantic-ui-react'

const ListQuestions = (props) => {
  const { questionIds } = props
  return (
    <Card.Group itemsPerRow={1}>
      {questionIds.length > 0
        ? questionIds.map((id) => (
            <Question key={id} id={id}/>
          ))
        : (
          <Message>
            <Message.Header>God job!</Message.Header>
              <p>
                There are no more unanswered questions.
              </p>
          </Message>
        )
      }
    </Card.Group>
  )
}

function mapStateToProps ({questions, authedUser},{answered}) {
  const filteredQuestions = Object.keys(questions)
    .filter((id) => {
      return answered
        ? (questions[id].optionOne.votes.includes(authedUser) ||
          questions[id].optionTwo.votes.includes(authedUser))
        : (!questions[id].optionOne.votes.includes(authedUser) &&
          !questions[id].optionTwo.votes.includes(authedUser))
  })
  return {
    questionIds: filteredQuestions
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(ListQuestions)