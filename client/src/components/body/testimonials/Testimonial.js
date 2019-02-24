import React, { Component } from 'react';
import { Container, Divider} from 'semantic-ui-react';

import './_testimonials.scss'

class Testimonial extends Component {
  render() {
    return (
      <div id="testimonials">
        <Container id="container">
          <h4>
          GUEST TESTIMONIALS
          </h4>
          <Divider id="divider"/>
          <h2>
          We got do take advantage of the saunas which was great and we also loved the sleeping room. We will send be coming back for another getaway.
          </h2>
          <h4> – by Jamila W. “yelp” – </h4>
        </Container>
      </div>
    )
  }
}

export default Testimonial;
