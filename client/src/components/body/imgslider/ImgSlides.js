import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './_imgslides.scss';

class ImgSlides extends Component {

  render() {
    const content = [
      {
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        title: 'Vulputate Mollis Ultricies',
        description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        button: 'READ MORE'
      },
      {
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        title: 'Tortor Dapibus',
        description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
        button: 'DISCOVER'
      },
      {
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        title: 'Phasellus volutpat metus',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
        button: 'BUY NOW'
      }
    ]

    return (
      <Slider id="imgslider" autoplay={3000}>
      	{content.map((item, index) => (
      		<div
      			key={index}
      			style={{ background: `url('${item.image}') no-repeat center center` }}
      		>
            <Container style={{textAlign: 'center', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
              <Fade bottom duration={2000}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Button color='orange'>{item.button}</Button>
              </Fade>
            </Container>
      		</div>
      	))}
      </Slider>
    )
  }
}

export default ImgSlides;
