import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionDetail from './QuestionDetail'
import VoteQuestion from './VoteQuestion'

class QuestionPage extends Component {
  render() {
    const { question, authedUser} = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { id, optionOne, optionTwo } = question
    const votedOne = optionOne.votes.includes(authedUser)
    const votedTwo = optionTwo.votes.includes(authedUser)
    const voted = votedOne || votedTwo

    if (voted === true) {
      return <QuestionDetail id={id} />
    } else {
      return <VoteQuestion id={id}/>
    }
  }
}

function mapStateToProps({authedUser, questions, users},props) {
  const { question_id } = props.match.params
  const question = questions[question_id]

  return {
    question,
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))