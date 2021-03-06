import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Container, Divider, Header, Button, Grid, Image } from 'semantic-ui-react';

import './_doubleimagewithtext.scss';

const contents = {
  title: 'Left Aligned Title',
  header: 'Left Aligned Header',
  details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,s pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus.',
  imgUrl: 'images/square-image.png',
  bttUrl: '/services',
  button: 'SEE DETAILS'
}

class DoubleImageWithText extends Component {

  render() {
    const { title, header, details, button, bttUrl} = contents;

    return(
      <div id="doubleimagewithtext">
        <Grid id="grid" stackable as={Container} divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column verticalAlign='middle'>
              <Header className="header" as='h5' textAlign='left'>
                {title}
              </Header>
              <Divider/>
              <Header className="header italic" as='h2'>
                {header}
              </Header>
              <Container id="container" textAlign='justified'>
                <p>{details}</p>
              </Container>
              <Fade left duration={1500}>
                <Button className="mainButton" as={Link} to={bttUrl} basic color='teal'>
                {button}
                </Button>
              </Fade>
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
                <Image src='images/square-image.png' size='medium' centered/>
                <br/>
                <Image src='images/square-image.png' size='medium' centered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default DoubleImageWithText;
