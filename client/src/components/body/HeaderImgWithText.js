import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import StickyBar from '../navbar/StickyBar';

class HeaderImgWithText extends Component {

  renderTitle() {
    const pathName = window.location.pathname;

    switch(pathName) {
      case '/promotion':
        return {
          title: 'Promotions',
          bgUrl: 'pink'
        }
      case '/services/skincare':
        return {
          title: 'Skincare',
          bgUrl: 'blue'
        }
      case '/services/treatments':
        return {
          title: 'Treatments',
          bgUrl: 'green'
        }
      case '/services/microblading':
        return {
          title: 'Microblading',
          bgUrl: 'pink'
        }
        case '/services/collin':
          return {
            title: 'GM Collin',
            bgUrl: 'red'
          }
      default:
        return {
          title: 'Welcome',
          bgUrl: 'light grey'
        };
    }
  }

  render() {
    const { title, bgUrl } = this.renderTitle();

    return (
      <div style={{marginTop: '-32px', backgroundColor: bgUrl, height: '600px'}}>

        <StickyBar />

        <Fade top duration={1500}>
          <h2 style={{textAlign: 'center', paddingTop: '100px', fontSize: '2.2em', color: 'teal'}}>{title}</h2>
        </Fade>

      </div>
    )
  }
}

export default HeaderImgWithText;
