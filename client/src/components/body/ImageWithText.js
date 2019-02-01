import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Header, Button, Grid, Image } from 'semantic-ui-react';

const contents = {
  title: 'Left Aligned Title',
  header: 'Left Aligned Header',
  details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,s pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus.',
  imgUrl: 'images/square-image.png',
  bttUrl: '/services',
  button: 'SEE DETAILS'
}

class ImageWithText extends Component {

  render() {
    const { title, header, details, button, imgUrl, bttUrl} = contents;

    return(
      <div>
        <Grid stackable as={Container} divided='vertically' style={{verticalAlign: 'middle'}}>
          <Grid.Row columns={2}>
            <Grid.Column verticalAlign='middle'>
              <Header as='h5' textAlign='left' style={{padding: '10px 0px'}}>
                {title}
              </Header>
              <Divider style={{width: '100px'}} />
              <Header style={{padding: '10px 0px', fontStyle: 'italic'}} as='h2'>
                {header}
              </Header>
              <Container textAlign='justified' style={{padding: '20px 0px'}}>
                <p>{details}</p>
              </Container>
              <Button as={Link} to={bttUrl} style={{margin: '25px 0px', borderRadius: '30px'}} basic color='teal'>
                {button}
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Image src={imgUrl} fluid/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ImageWithText;
