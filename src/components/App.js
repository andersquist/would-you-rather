import React, { Component, Fragment } from 'react'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import Home from './Home'
import Login from './Login'
import {handleInitialData} from '../actions/shared'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import {NotFound} from './NotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { location, loading, loggedIn } = this.props
    return (
      <Fragment>
        <LoadingBar />
        <Nav />
        {loading === true
          ? null
          : loggedIn === true
            ? <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/questions/:question_id' component={QuestionPage} />
                <Route component={NotFound} />
              </Switch>
            : <Switch>
                <Route component={Login} />
                <Redirect to={{
                  pathname: '/',
                  state: {from: location}
                }} /> }
              </Switch>
            }
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
