import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Image,
  Grid,
  Table,
  Segment,
} from 'semantic-ui-react'

class Score extends Component {
  render() {
    const { user } = this.props
    const { name, avatarURL, answers, questions } = user
    const score = Object.keys(answers).length + questions.length

    return (
      <Card centered>
        <Card.Content>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image
                  size='tiny'
                  circular
                  src={avatarURL}/>
              </Grid.Column >
              <Grid.Column width={7}>
                <h3>{name}</h3>
                <Table basic='very' celled collapsing>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Answered questions:</Table.Cell>
                      <Table.Cell>{Object.keys(answers).length}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Created questions:</Table.Cell>
                      <Table.Cell>{questions.length}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='middle'>
                <Segment.Group>
                  <Segment secondary>
                    <h4>Score</h4>
                  </Segment>
                  <Segment>
                    <div className="ui teal circular big label">{score}</div>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps({users}, {id}) {
  const user = users[id]

  return {
    user,
  }
}

export default connect(mapStateToProps)(Score)