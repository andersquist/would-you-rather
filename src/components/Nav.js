import React from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'
import LoginButton from './LoginButton'

const Nav = () => {
  return (
    <Menu borderless>
      <Container>
        <Menu.Item as='a' name='home' active={true} />
        <Menu.Item as='a' name='new questions' />
        <Menu.Item as='a' name='leader board' />
        <Menu.Menu position='right'>
          <LoginButton />
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Nav