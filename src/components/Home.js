import React, { Component } from 'react'
import { Tab, Grid } from 'semantic-ui-react'
import ListQuestions from './ListQuestions'

const panes = [
  { menuItem: 'Unanswered Questions', render: () => <Tab.Pane><ListQuestions answered={false}/></Tab.Pane> },
  { menuItem: 'Answered Questions', render: () => <Tab.Pane><ListQuestions answered={true}/></Tab.Pane> },
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 400 }}>
            <Tab panes={panes} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}