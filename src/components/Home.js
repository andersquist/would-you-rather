import React, { Component } from 'react'
import {
  Menu,
  Container,
  Image,
  Tab, } from 'semantic-ui-react'
import ListQuestions from './ListQuestions'

const panes = [
  { menuItem: 'Unanswered Questions', render: () => <Tab.Pane><ListQuestions/></Tab.Pane> },
  { menuItem: 'Answered Questions', render: () => <Tab.Pane><ListQuestions/></Tab.Pane> },
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu borderless>
          <Container>
            <Menu.Item as='a' name='home' active={true} />
            <Menu.Item as='a' name='new questions' />
            <Menu.Item as='a' name='leader board' />
            <Menu.Menu position='right'>
              <Menu.Item>
                <span>
                  Hello, Tyler McGinnis
                </span>
                <Image
                  src='https://semantic-ui.com/images/avatar/large/matt.jpg'
                  floated='right'
                  avatar />
              </Menu.Item>
              <Menu.Item
                as='a'
                name='logout'
                />
            </Menu.Menu>
          </Container>
        </Menu>
        <Container text>
          <Tab panes={panes}/>
        </Container>

      </div>
    )
  }

}