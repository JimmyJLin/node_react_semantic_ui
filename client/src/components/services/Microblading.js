import React, { Component } from 'react';

import ImageWithText from '../body/ImageWithText';
import Collections from '../body/Collections';
import Contact from '../body/Contact';
import SubTitle from '../body/SubTitle';

class Microblading extends Component {
  render() {
    const subTitleData = {
      title: 'Microblading',
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

export default Microblading;
