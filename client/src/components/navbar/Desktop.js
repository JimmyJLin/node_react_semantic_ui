import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Responsive, Container, Button, Segment, Visibility } from 'semantic-ui-react';

import getWidth from '../../middlewares/getWidth';
import LandingHeading from '../LandingHeading';

class Desktop extends Component {
  state = {activeItem: ''}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { fixed, activeItem } = this.state
    return(
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
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

                <Menu.Item position='right'>
                  <Button
                    name='login'
                    active={activeItem === 'login'}
                    as={Link}
                    to='/login'
                    inverted={!fixed}
                    onClick={this.handleItemClick}
                  >
                    Log in
                  </Button>

                  <Button
                    name='logout'
                    active={activeItem === 'logout'}
                    as={Link}
                    to='/logout'
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                    onClick={this.handleItemClick}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <LandingHeading />
          </Segment>
        </Visibility>
      </Responsive>
    )
  }
}

export default Desktop;
