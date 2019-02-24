import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Container, Divider} from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import './_subtitle.scss'

class SubTitle extends Component {
  render(props) {
    const { title, description } = this.props.data

    return (
      <div id="subtitle">
        <Container id="container">
          <h2 id="paddingBottom">
          { title }
          </h2>
          <Divider id="divider"/>
          <h2 id="paddingTop">
            { description }
          </h2>
          <Fade top duration={2000}>
            <Button className="mainButton" as={Link} to='/' basic color='teal'>
              SEE DETAILS
            </Button>
          </Fade>
        </Container>
      </div>
    )
  }
}

export default SubTitle;
