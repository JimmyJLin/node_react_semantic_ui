import React, { Component } from 'react';

import { Container, Button, Header, Icon } from 'semantic-ui-react';
import getWidth from '../../middlewares/getWidth';

class LandingHeading extends Component {
  state = {mobileSize: ''};

  componentDidMount() {
    const mobileSize = ()=> {
      if (getWidth() < '767') {
        return this.setState({ mobileSize: true})
      }
    }
    mobileSize();
  };

  renderContent() {
    const pathName = window.location.pathname;

    switch(pathName) {
      case '/work':
        return {
          h1Content: 'Work',
          h2Content: 'Do whatever you want when you want to.',
          button: 'Get Started / Work'
        }
      case '/company':
        return {
          h1Content: 'Company',
          h2Content: 'Do whatever you want when you want to.',
          button: 'Get Started w/ Company'
        };
      case '/careers':
        return {
          h1Content: 'Careers',
          h2Content: 'Do whatever you want when you want to.',
          button: 'Get Started w/ Careers'
        }
      default:
        return {
          h1Content: 'Imagine-a-company',
          h2Content: 'Do whatever you want when you want to.',
          button: 'Get Started'
        };
    }
  }

  render() {
    const mobile = this.state.mobileSize;
    const {h1Content, h2Content, button} = this.renderContent();

    return (
      <Container text>
        <Header
          as='h1'
          content={h1Content}
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
          content={h2Content}
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          {button}
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
}

export default LandingHeading;
