import React, { Component } from 'react';
import { Container, Button, Header, Icon } from 'semantic-ui-react';
// import Mobile from './navbar/Mobile';
import getWidth from '../middlewares/getWidth';

class LandingHeading extends Component {
  state = {mobileSize: ''}
  componentDidMount() {
    const mobileSize = ()=> {
      if (getWidth() < '767') {
        return this.setState({ mobileSize: true})
      }
    }
    mobileSize();
  }
  render() {

    const mobile = this.state.mobileSize;
    // console.log('width', getWidth())
    // console.log('mobileMaxWidth', mobile)
    return (
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile <= '767' ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
}

export default LandingHeading;
