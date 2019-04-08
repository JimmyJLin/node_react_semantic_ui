import React, { Component } from 'react';

import { Segment, Container, Grid, List, Image} from 'semantic-ui-react';

import './_footer.scss'
import logo from './logo.png';

class Footer extends Component {
  render() {
    return (
      <Segment id="footer" inverted vertical>
        <Container>
          <Grid inverted textAlign='center'>
            <Grid.Row>
              <Grid.Column>
                <Image src={logo} size='large' alt="logo" centered/>
                <br/>

                {/* contct info */}
                <List link inverted>
                  <List.Item id="listItem" as='a' href="tel:347-946-2611">
                    <List.Icon className="listIcon" name='phone' color='grey' size='large'/>
                    (347) 946 - 2611
                  </List.Item>
                  <br/>
                  <List.Item as='a' href="mailto:support@allthingsfrenchie.com?subject=Mail%20From%20Our%20Website">
                    <List.Icon className="listIcon" name='mail' color='grey' size='large'/>
                    support@allthingsfrenchie.com
                  </List.Item>
                </List>
                <br/>

                {/* Social Medias */}
                <List animated horizontal relaxed='very'>
                  <List.Item>
                    <List.Content>
                      <List.Header as='a' href='https://www.facebook.com/allthingsfrenchie.shop' target='new'>
                        <List.Icon name='facebook official' color='grey' size='big'/>
                      </List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as='a' href='https://www.instagram.com/allthingsfrenchie_shop/' target='new'>
                        <List.Icon name='instagram' color='grey' size='big'/>
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <p id="copyright">© Copyright Allthingsfrenchie | All Rights Reserved</p>
        </Container>
      </Segment>
    )
  }
}

export default Footer;
