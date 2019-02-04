import React, { Component } from 'react';

import { Segment, Container, Grid, List, Image} from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid inverted textAlign='center'>
            <Grid.Row>
              <Grid.Column>
                <Image src='/images/logo_white.png' size='small' centered/>
                <br/>

                {/* contct info */}
                <List link inverted>
                  <List.Item as='a' href="https://www.google.com/maps/place/LIWEI+BEAUTY/@40.717511,-73.9978547,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259881d003827:0x2f1786e63b9151de!8m2!3d40.717511!4d-73.995666" target='new'>
                    <List.Icon name='map marker alternate' color='grey' size='large' style={{paddingRight: '30px'}}/>
                    90 Bowery St Suite 405, New York, NY 10013
                  </List.Item>
                  <br/>
                  <List.Item style={{margin: '20px, 0px'}} as='a' href="tel:917-639-3900">
                    <List.Icon name='phone' color='grey' size='large' style={{paddingRight: '30px'}} />
                    (917) 639 - 3900
                  </List.Item>
                  <br/>
                  <List.Item as='a' href="mailto:liweibeauty88@gmail.com?subject=Mail%20From%20Our%20Website">
                    <List.Icon name='mail' color='grey' size='large' style={{paddingRight: '30px'}} />
                    LiWeiBeauty88@gmail.com
                  </List.Item>
                </List>
                <br/>

                {/* Social Medias */}
                <List animated horizontal relaxed='very'>
                  <List.Item>
                    <List.Content>
                      <List.Header as='a' href='https://www.facebook.com/liweibeautycenter/' target='new'>
                        <List.Icon name='facebook official' color='grey' size='big'/>
                      </List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as='a' href='https://www.instagram.com/liweibeauty/' target='new'>
                        <List.Icon name='instagram' color='grey' size='big'/>
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <p style={{textAlign: 'center', paddingTop: '50px', color: 'grey'}}>© Copyright LiWei Beauty | All Rights Reserved</p>
        </Container>
      </Segment>
    )
  }
}

export default Footer;
