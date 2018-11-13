import React from 'react'
import { connect } from 'react-redux'
import Score from './Score'
import { Card } from 'semantic-ui-react'

const ListScores = (props) => {
  const { userIds } = props
  return (
    <Card.Group itemsPerRow={1}>
      {userIds.map((id) => (
          <Score key={id} id={id}/>
        ))
      }
    </Card.Group>
  )
}

function mapStateToProps ({users}) {
  return {
    userIds: Object.keys(users)
      .sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length) -
        (Object.keys(users[a].answers).length + users[a].questions.length))
  }
}

export default connect(mapStateToProps)(ListScores)