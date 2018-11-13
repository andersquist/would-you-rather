import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Card, Image, Grid, Message, Header, Progress} from 'semantic-ui-react'

class QuestionDetail extends Component {
  render () {
    const { question, author, authedUser} = this.props
    const { name, avatarURL } = author
    const { optionOne, optionTwo } = question
    const votedOne = optionOne.votes.includes(authedUser)
    const votedTwo = optionTwo.votes.includes(authedUser)
    const votesOne = optionOne.votes.length
    const votesTwo = optionTwo.votes.length
    const totalVotes = votesOne + votesTwo

    return (
      <Card centered>
        <Card.Content>
          <Card.Header>Asked by {name}:</Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  size='tiny'
                  circular
                  src={avatarURL}/>
              </Grid.Column >
              <Grid.Column width={12}>
                <Header>Results:</Header>
                <Message
                  color={ votesOne > votesTwo ? 'green' : 'grey'}
                  size='small'>
                  {votedOne && <div className="floating ui yellow mini circular label">
                    Your vote
                  </div>}
                  <Message.Header>
                    {optionOne.text}
                  </Message.Header>
                  <Message.Content>
                    <Progress
                      size='small'
                      color={ votesOne > votesTwo ? 'green' : 'grey'}
                      percent={Math.round((votesOne/totalVotes)*100).toPrecision(3)}
                      progress
                      label={`${votesOne} out of ${totalVotes} votes`}/>
                  </Message.Content>
                </Message>
                <Message color={ votesTwo > votesOne ? 'green' : 'grey'} size='small'>
                  {votedTwo && <div className="floating ui yellow mini circular label">
                    Your vote
                  </div>}
                  <Message.Header>
                    {optionTwo.text}
                  </Message.Header>
                  <Message.Content>
                    <Progress
                      size='small'
                      color={ votesTwo > votesOne ? 'green' : 'grey'}
                      percent={Math.round((votesTwo/totalVotes)*100).toPrecision(3)}
                      progress
                      label={`${votesTwo} out of ${totalVotes} votes`}/>
                  </Message.Content>
                </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps ({questions, users, authedUser}, {id}) {
  const question = questions[id]
  const author = question ? users[question.author] : null

  return {
    question,
    author,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionDetail)