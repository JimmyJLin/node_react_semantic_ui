import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Container, Header, Button, Grid, Image, Icon, Accordion, Divider } from 'semantic-ui-react';

import './_collection.scss';

const accordionContents = [
  {
  id: '0',
  title: 'Deep Cleansing Facial',
  price: '$75 (60min)',
  details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.',
  url: '/services/facial/deep_cleansing_facial'
  },
  {
  id: '1',
  title: 'Oxygen Facial',
  price: '$95 (60min)',
  details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.',
  url: '/services/facial/oxy_facial'
  },
  {
  id: '2',
  title: 'Microdermabrasion',
  price: '$105 (60min)',
  details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.',
  url: '/services/facial/microdermabrasion'
  },
  {
  id: '3',
  title: 'Acne Facial',
  price: '$55 (30min)',
  details: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong.',
  url: '/services/facial/acne_facial'
  }
]

class Collections extends Component {
  state = { activeIndex: '', animation: 'fade down', duration: 500, visible: true }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const menuItems = accordionContents.map((e) => {
      const {id, title, price, details, url} = e;

      return (
        <div key={id}>
          <Accordion.Title active={activeIndex === id} index={id} onClick={this.handleClick} style={{fontSize: '1.25em'}}>
            <Icon name='dropdown'/>
            {title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === id}>
            <p style={{color: 'teal'}}>{price}</p>
            <p>{details}</p>
            <Grid>
              <Grid.Column textAlign="center">
                <Button as={Link} to={url} style={{margin: '25px 0px', borderRadius: '30px', fontSize: '1.3em', letterSpacing: '2px'}} basic>
                  <Icon name='user' />
                  BOOK NOW
                </Button>
              </Grid.Column>
            </Grid>
          </Accordion.Content>
        </div>
      )
    })


    return (
      <Container id="collection">
        <Grid>
          <Grid.Column>
            <Header className="menuName" as='h5' textAlign='right'>
            Beauty Spa
            </Header>
            <Divider id="divider" floated='right'/>
          </Grid.Column>
        </Grid>
        <Header id="menuTitle" as='h1' textAlign='right'>
          Menu Title
        </Header>
        <Grid id="grid" stackable as={Container} divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column verticalAlign='middle'>
              <Fade top duration={1500}>
                <Image src='/images/square-image.png' fluid/>
              </Fade>
            </Grid.Column>

            <Grid.Column>
              <Accordion fluid styled>
                {menuItems}
              </Accordion>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Collections;
