import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import Home from './Home'
import Login from './Login'
import {handleInitialData} from '../actions/shared'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Nav />
        {this.props.loading === true
          ? null
          : <Login />}
      </Fragment>
    )
  }
}

function mapStateToProps({loadingBar, authedUser}) {
  return {
    loading: loadingBar.default === 1,
    loggedIn: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
