import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {saveQuestionAnswer} from '../utils/api'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_ON_QUESTION = 'VOTE_ON_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function voteOnQuestion (qid, answer, authedUser) {
  return {
    type: VOTE_ON_QUESTION,
    qid,
    authedUser,
    answer,
  }
}

export function handleVoteOnQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestionAnswer({
      qid,
      answer,
      authedUser,
    })
      .then(() => dispatch(voteOnQuestion(qid, answer, authedUser)))
      .then(() => dispatch(hideLoading()))
  }
}