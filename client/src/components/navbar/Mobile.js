import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Responsive, Container, Button, Segment, Sidebar, Icon } from 'semantic-ui-react';
import getWidth from '../../middlewares/getWidth';
import LandingHeading from '../LandingHeading';

class Mobile extends Component {
  state = {activeItem: ''}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { sidebarOpened, activeItem } = this.state

    return(
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            as={Link}
            to='/'
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='work'
            active={activeItem === 'work'}
            as={Link}
            to='/work'
            onClick={this.handleItemClick}
          >
            Work
          </Menu.Item>

          <Menu.Item
            name='company'
            active={activeItem === 'company'}
            as={Link}
            to='/company'
            onClick={this.handleItemClick}
          >
            Company
          </Menu.Item>

          <Menu.Item
            name='careers'
            active={activeItem === 'careers'}
            as={Link}
            to='/careers'
            onClick={this.handleItemClick}
          >
            Careers
          </Menu.Item>

          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            as={Link}
            to='/login'
            onClick={this.handleItemClick}
          >
            Careers
          </Menu.Item>

          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            as={Link}
            to='/logout'
            onClick={this.handleItemClick}
          >
            Careers
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <LandingHeading />
          </Segment>
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

export default Mobile;
