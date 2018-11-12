import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import Home from './Home'
import {handleInitialData} from '../actions/shared'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        <Nav />
        {this.props.loading === true
          ? null
          : <Home />}
      </div>
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
