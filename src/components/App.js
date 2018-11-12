import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
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
    const { location, history, loading, loggedIn } = this.props
    return (
      <Fragment>
        <LoadingBar />
        <Nav />
        <Route path='/login' component={Login} />
        {loading === true
          ? null
          : loggedIn === true
            ? <div>
                <Route path='/' exact component={Home} />
              </div>
            : location.pathname !== '/login' && history.push('/login') }
      </Fragment>
    )
  }
}

function mapStateToProps({loadingBar, authedUser}, {props}) {
  return {
    loading: loadingBar.default === 1,
    loggedIn: authedUser !== null,
  }
}

export default withRouter(connect(mapStateToProps)(App))
