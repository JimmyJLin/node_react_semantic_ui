import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider, List, Form, Input, Segment, Checkbox, Button, Modal } from 'semantic-ui-react'


import CartSummary from './CartSummary';

import './_shipping.scss'

class Shipping extends Component{

  constructor(props) {
    super(props);
    this.handleShippingInfo = this.handleShippingInfo.bind(this)
    this.OpenSignInModal = this.OpenSignInModal.bind(this)
    this.OpenSignUpModal = this.OpenSignUpModal.bind(this)
    this.closeSignInModal = this.closeSignInModal.bind(this)
    this.closeSignUpModal = this.closeSignUpModal.bind(this)
  }

  state = {
    first_name: "",
    last_name: "",
    stree_address: "",
    address_2: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
    emailCheckbox: true,
    signInPopup: false,
    signUpPopup: false
  }

  signInPopup = () => this.setState({ signInPopup: false })
  signUpPopup = () => this.setState({ signUpPopup: false })

  async componentWillMount(){

    const atfShippingInfo = localStorage.getItem("atfShippingInfo")

    if(_.isEmpty(atfShippingInfo) === false) {
      const shippingInfo = await JSON.parse(localStorage.getItem("atfShippingInfo"))
      console.log('shippingInfo', shippingInfo)
      const { first_name, last_name, stree_address, address_2, city, state, zipcode, phone, email, emailCheckbox } = shippingInfo

      await this.setState({
        first_name: first_name,
        last_name: last_name,
        stree_address: stree_address,
        address_2: address_2,
        city: city,
        state: state,
        zipcode:zipcode,
        phone: phone,
        email: email,
        emailCheckbox: emailCheckbox
      })
    }

  }

  handleShippingInfo(){
    const { first_name, last_name, stree_address, address_2, city, state, zipcode, phone, email, emailCheckbox} = this.state;
    console.log('emailCheckbox', emailCheckbox)
    const shippingData = {
      first_name: first_name,
      last_name: last_name,
      stree_address: stree_address,
      address_2: address_2,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone,
      email: email,
      emailCheckbox: emailCheckbox
    }

    localStorage.setItem('atfShippingInfo', JSON.stringify(shippingData))

    console.log('shippingData ====>', shippingData)
  }

  OpenSignInModal(){
    this.setState({
      signInPopup: true,
      signUpPopup: false
    })
  }

  closeSignInModal(){
    this.setState({
      signInPopup: false,
      signUpPopup: false
    })
  }

  OpenSignUpModal(){
    this.setState({
      signUpPopup: true,
      signInPopup: false
    })
  }

  closeSignUpModal(){
    this.setState({
      signUpPopup: false,
      signInPopup: false
    })
  }


  renderShipping(){
    const { signInPopup, signUpPopup } = this.state;

    return(
      <Container>
        <Grid stackable columns='equal'>
          <Grid.Column>
            <h3>Check Out As A Guest</h3>
            <p>Where Should we email your receipt?</p>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  control={Input}
                  value={this.state.email}
                  lable="Email"
                  placeholder="Email"
                  onChange={(e) => this.setState({email: e.target.value})}
                />
              </Form.Group>
              <Form.Field
                defaultChecked
                control={Checkbox}
                onChange={
                  this.state.emailCheckbox === true ? (e) => this.setState({emailCheckbox: !true}) : (e) => this.setState({emailCheckbox: true})
                }
                label={{ children: 'Sign up to receive exclusive offers + promotions.' }}
              />
            </Form>
          </Grid.Column>
          <Grid.Column>
            <h3>Sing In or Sign Up</h3>
            <p>Sign in to check out faster</p>
            <Button
              className="ProceedToCartButton"
              fluid color="black"
              onClick={this.OpenSignInModal}
            >
              <Button.Content> Sign In </Button.Content>
            </Button>
            <div className="TopAndBottomPadding centerAlign">
              <span
                className="onHoverItem cursorPointer"
                onClick={this.OpenSignUpModal}
              >Sign Up</span>
            </div>

            {/* Sign In Modal */}
            <Modal dimmer='inverted' open={signInPopup} basic seize='mini'>
              <Grid centered verticalAlign='middle'>
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <Segment>
                    <Button className="Popup__close" onClick={this.closeSignInModal}> x </Button>
                    <h3 className="centerAlign TopAndBottomPadding">SIGN IN</h3>
                    <Form>
                      <Form.Field
                        icon='user'
                        iconPosition='left'
                        control={Input}
                        value={this.state.email}
                        lable="Email"
                        placeholder="Email"
                        onChange={(e) => this.setState({email: e.target.value})}
                      />
                      <Form.Field
                        icon='lock'
                        iconPosition='left'
                        control={Input}
                        type='password'
                        value={this.state.password}
                        lable="Password"
                        placeholder="Password"
                        onChange={(e) => this.setState({password: e.target.value})}
                      />
                      <Button
                        fluid color="black"
                        onClick={this.closeSignInModal}
                      >
                        <Button.Content> Sign In </Button.Content>
                      </Button>
                    </Form>
                    <div className="mainFontColor centerAlign smallTopAndBottomPadding">
                      <span className="onHoverItem cursorPointer">Forgot Password</span>
                    </div>

                    <Divider />

                    <div className="smallTopAndBottomPadding">
                      <Button
                        fluid
                        onClick={this.OpenSignUpModal}
                      >
                        <Button.Content className="mainFontColor"> Create An Account </Button.Content>
                      </Button>
                    </div>

                  </Segment>
                </Grid.Column>
              </Grid>

            </Modal>

            {/* Sign Up Modal */}
            <Modal dimmer='inverted' open={signUpPopup} basic seize='mini'>
              <Grid centered verticalAlign='middle'>
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <Segment>
                    <Button className="Popup__close" onClick={this.closeSignUpModal}> x </Button>
                    <h3 className="centerAlign TopAndBottomPadding">CREATE AN ACCOUNT</h3>
                    <p>Please enter your email address and password to create an account.</p>
                    <Form>
                      <Form.Field
                        icon='user'
                        iconPosition='left'
                        control={Input}
                        value={this.state.email}
                        lable="Email"
                        placeholder="Email"
                        onChange={(e) => this.setState({email: e.target.value})}
                      />
                      <Form.Field
                        icon='lock'
                        iconPosition='left'
                        control={Input}
                        type='password'
                        value={this.state.password}
                        lable="Password"
                        placeholder="Password"
                        onChange={(e) => this.setState({password: e.target.value})}
                      />
                      <Button
                        fluid color="black"
                        onClick={this.closeSignUpModal}
                      >
                        <Button.Content> Create An Account </Button.Content>
                      </Button>
                    </Form>

                    <Divider />

                    <div className="smallTopAndBottomPadding">
                      <Button
                        fluid
                        onClick={this.OpenSignInModal}
                      >
                        <Button.Content className="mainFontColor"> Sign In </Button.Content>
                      </Button>
                    </div>

                  </Segment>
                </Grid.Column>
              </Grid>

            </Modal>


          </Grid.Column>
        </Grid>

        <h3>Shipping Address</h3>
        <Segment>
          <p>Please enter a shipping address.</p>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                lable="First Name"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={(e) => this.setState({first_name: e.target.value})}
                required
              />
              <Form.Field
                control={Input}
                lable="Last Name"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={(e) => this.setState({last_name: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Field
              control={Input}
              lable="Street Address"
              placeholder="Street Address"
              value={this.state.stree_address}
              onChange={(e) => this.setState({stree_address: e.target.value})}
              required
            />
            <Form.Field
              control={Input}
              lable="Address 2"
              placeholder="Address 2"
              value={this.state.address_2}
              onChange={(e) => this.setState({address_2: e.target.value})}
            />
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                lable="City"
                placeholder="City"
                value={this.state.city}
                onChange={(e) => this.setState({city: e.target.value})}
                required
              />
              <Form.Field
                control={Input}
                lable="State"
                placeholder="State"
                value={this.state.state}
                onChange={(e) => this.setState({state: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Field
              control={Input}
              lable="Zip Code"
              placeholder="Zip Code"
              value={this.state.zipcode}
              onChange={(e) => this.setState({zipcode: e.target.value})}
              required
            />
            <Form.Field
              control={Input}
              lable="Daytime Phone"
              placeholder="Daytime Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({phone: e.target.value})}
              required
            />
          </Form>
        </Segment>


      </Container>
    )
  }


  render() {
    const checkOut={
      type: "shipping",
      btnLink: "/checkout/payment",
      btnName: "Continue"
    }

    return(
      <Container className="TopAndBottomPadding">
        <Grid stackable columns='equal'>
          <Grid.Column>
            <List className="breadcrumb" horizontal link>
              <List.Item as={Link} to="/checkout/shipping" className="shipping onHoverItem not_disabled">Shipping</List.Item>
              <List.Item className="spacer"> / </List.Item>
              <List.Item className="payment onHoverItem disabled">Payment</List.Item>
              <List.Item className="spacer"> / </List.Item>
              <List.Item className="review onHoverItem disabled">Review</List.Item>
            </List>

            <Divider />

            {this.renderShipping()}

          </Grid.Column>

          <Grid.Column width={4}>
            <CartSummary
              checkOut={checkOut}
              handleShippingInfo={this.handleShippingInfo}
            />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Shipping
