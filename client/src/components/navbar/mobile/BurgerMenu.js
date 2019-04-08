import React, { Component } from 'react';
import { Input, Label, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { Header, Button, Container } from 'semantic-ui-react'

import './_burgerMenu.scss'

class BurgerMenu extends Component {

  state = {

  }

  handleCartClose() {
    this.setState({
      activeItem: 'home',
      isBurgerOpen: false,
    });
  }

  render() {
    return (
      <div className={`Burger ${this.props.isBurgerOpen === true ? 'Burger--open' : ''}`}>
        <Container>
          <Header size="medium" className="Burger__header">
            <Button className="Burger__close" onClick={this.props.handleBurgerClose}> x </Button>
          </Header>
          <h1>Menus</h1>

          <Menu vertical fluid secondary>

            <Menu.Item as={Link} to="/shops/new" onClick={this.props.handleBurgerClose}> New </Menu.Item>
            <Menu.Item as={Link} to="/shops/puff_stuff" onClick={this.props.handleBurgerClose}> Puff Stuff </Menu.Item>
            <Menu.Item as={Link} to="/shops/women" onClick={this.props.handleBurgerClose}> Women </Menu.Item>
            <Menu.Item as={Link} to="/shops/jewelry" onClick={this.props.handleBurgerClose}> Jewelry </Menu.Item>
            <Menu.Item as={Link} to="/shops/bags_accessories" onClick={this.props.handleBurgerClose}> Bags & Accessories </Menu.Item>
            <Menu.Item as={Link} to="/shops/socks" onClick={this.props.handleBurgerClose}> Socks </Menu.Item>
            <Menu.Item as={Link} to="/shops/sales" onClick={this.props.handleBurgerClose}> Sales </Menu.Item>

          </Menu>

        </Container>
      </div>
    )
  }
}

export default BurgerMenu
