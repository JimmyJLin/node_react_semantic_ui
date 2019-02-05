import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Container, Divider} from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';


class SubTitle extends Component {
  render(props) {
    const { title, description } = this.props.data

    return (
      <div style={{
        backgroundImage: `url('/images/review.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '500px',
        backgroundPosition: 'center'
      }}>
        <Container style={{color:'white', letterSpacing: '3px', textAlign: 'center', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
          <h2 style={{paddingBottom: '25px'}}>
          { title }
          </h2>
          <Divider style={{margin: '0% 40%', borderTop: '1px solid white', borderBottom: '1px solid white'}}/>
          <h2 style={{paddingTop: '25px'}}>
            { description }
          </h2>
          <Fade top duration={2000}>
            <Button as={Link} to='/' style={{margin: '25px 0px', borderRadius: '30px', fontSize: '1.3em', letterSpacing: '2px'}} basic color='teal'>
              SEE DETAILS
            </Button>
          </Fade>
        </Container>
      </div>
    )
  }
}

export default SubTitle;
