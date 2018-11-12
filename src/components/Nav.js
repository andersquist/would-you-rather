import React from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'

const Nav = () => {
  const name = 'Tyler McGinnis'
  const avatar = 'https://semantic-ui.com/images/avatar/large/matt.jpg'
  return (
    <Menu borderless>
      <Container>
        <Menu.Item as='a' name='home' active={true} />
        <Menu.Item as='a' name='new questions' />
        <Menu.Item as='a' name='leader board' />
        <Menu.Menu position='right'>
          <Menu.Item>
                <span>
                  Hello, {name}
                </span>
            <Image
              src={avatar}
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
  )
}

export default Nav