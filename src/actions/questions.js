import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {saveQuestion, saveQuestionAnswer} from '../utils/api'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_ON_QUESTION = 'VOTE_ON_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const {authedUser} = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
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