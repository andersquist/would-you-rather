import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import ListScores from './ListScores'

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 400 }}>
            <ListScores/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LeaderBoard