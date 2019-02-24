import React, { Component } from 'react';

import ImageWithText from '../body/imagewithtext/ImageWithText';
import Collections from '../body/collection/Collections';
import Contact from '../body/contact/Contact';
import SubTitle from '../body/subtitle/SubTitle';


class Collin extends Component {

  render() {
    const subTitleData = {
      title: 'GM Collin',
      description: 'We got do take advantage of the saunas which was great and we also loved the sleeping room. We will send be coming back for another getaway.'
    }

    return (
      <div>
        <SubTitle data={subTitleData}/>

        <ImageWithText />

        <Collections />

        <Contact />

      </div>
    )
  }
}

export default Collin;
