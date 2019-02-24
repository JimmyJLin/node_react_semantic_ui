import React, { Component } from 'react';
import { Header, List, Grid } from 'semantic-ui-react';

import './_contact.scss'

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Grid id="grid" inverted textAlign='center'>
          <Grid.Row>
            <Grid.Column>
              <Header id="header" as='h1' textAlign='center'> Contact Us </Header>
              <List horizontal relaxed='very'>
                <List.Item as='a' href="mailto:support@allthingsfrenchie.com?subject=Mail%20From%20Our%20Website">
                  <List.Content>
                    <List.Icon name='mail' color='black' size='big'/>
                    <List.Header id="listHeader">Email Us</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item as='a' href="sms:347-946-2611">
                  <List.Content>
                    <List.Icon name='talk' color='blue' size='big'/>
                    <List.Header id="listHeader">Text Us</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item as='a' href="tel:347-946-2611">
                  <List.Content>
                    <List.Icon name='phone' color='green' size='big'/>
                    <List.Header id="listHeader">Call Us</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Contact;
