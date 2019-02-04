import React, { Component } from 'react';
import { Container, Divider} from 'semantic-ui-react';

class Testimonial extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: `url('/images/review.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '500px',
        backgroundPosition: 'center'
      }}>
        <Container style={{color:'white', letterSpacing: '3px', textAlign: 'center', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
          <h4 style={{paddingBottom: '25px'}}>
          GUEST TESTIMONIALS
          </h4>
          <Divider style={{margin: '0% 40%', borderTop: '1px solid white', borderBottom: '1px solid white'}}/>
          <h2 style={{paddingTop: '25px'}}>
          We got do take advantage of the saunas which was great and we also loved the sleeping room. We will send be coming back for another getaway.
          </h2>
          <h4 style={{paddingTop: '25px'}}> – by Jamila W. “yelp” – </h4>
        </Container>
      </div>
    )
  }
}

export default Testimonial;
