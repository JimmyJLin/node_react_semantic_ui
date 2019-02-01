import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import StickyBar from '../navbar/StickyBar';

class HeaderImgWithText extends Component {
  render() {
    return (
      <div style={{marginTop: '-32px', height: '600px', backgroundColor: 'teal'}}>

        <StickyBar />

        <Fade top duration={1500}>
          <h2 style={{textAlign: 'center', paddingTop: '100px', fontSize: '2.2em', color: 'white'}}>SUB TITLE</h2>
        </Fade>

      </div>
    )
  }
}

export default HeaderImgWithText;
