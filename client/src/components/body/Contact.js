import React, { Component } from 'react';
import { Header, List, Grid } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
      <div style={{padding: '50px 0px', height: '400px', backgroundColor: 'light grey'}}>
        <Grid inverted textAlign='center' style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' textAlign='center' style={{marginBottom: '50px'}}> Contact Us </Header>
              <List horizontal relaxed='very'>
                <List.Item as='a' href="mailto:liweibeauty88@gmail.com?subject=Mail%20From%20Our%20Website">
                  <List.Content>
                    <List.Icon name='mail' color='black' size='big'/>
                    <List.Header style={{paddingTop: '15px'}}>Email Us</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item style={{padding: '0px 50px'}} as='a' href="sms:917-639-3900">
                  <List.Content>
                    <List.Icon name='talk' color='blue' size='big'/>
                    <List.Header style={{paddingTop: '15px'}}>Text Us</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item as='a' href="tel:917-639-3900">
                  <List.Content>
                    <List.Icon name='phone' color='green' size='big'/>
                    <List.Header style={{paddingTop: '15px'}}>Call Us</List.Header>
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
