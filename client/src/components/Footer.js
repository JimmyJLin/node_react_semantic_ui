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
                  <List.Item>
                    <List.Icon name='map marker alternate' color='grey' size='large' style={{paddingRight: '30px'}}/>
                    90 Bowery St Suite 405, New York, NY 10013
                  </List.Item>
                  <br/>
                  <List.Item style={{margin: '20px, 0px'}}>
                    <List.Icon name='phone' color='grey' size='large' style={{paddingRight: '30px'}} />
                    (917) 639 - 3900
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='mail' color='grey' size='large' style={{paddingRight: '30px'}} />
                    LiWeiBeauty88@gmail.com
                  </List.Item>
                </List>
                <br/>

                {/* Social Medias */}
                <List animated horizontal relaxed='very'>
                  <List.Item>
                    <List.Content>
                      <List.Header as='a' href='https://www.facebook.com/liweibeautycenter/'>
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
        </Container>
      </Segment>
    )
  }
}

export default Footer;
