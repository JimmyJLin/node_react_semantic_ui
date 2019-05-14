import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewInstagramFeeds, setSpinner } from '../../actions';

import { Container, Card, Image } from 'semantic-ui-react'

import './_instagram.scss'

class Instagram extends Component {
  state = {
    instagram: []
  }

  async componentWillMount(){
    await this.props.fetchNewInstagramFeeds()
    await this.setState({
      instagram: this.props.instagram.data
    })

    // console.log('instagram', this.state.instagram)

    const spinner = {
      isLoading: false
    }
    await this.props.setSpinner(spinner)
  }

  renderInstagram(){
    const { instagram } = this.state

    const renderingInstagrams = instagram.slice(0, 4).map((e) => {
      const { id, images, link } = e

      return (
        <Card
          key={id}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image className="square zoom" src={images.standard_resolution.url} fluid />
          </a>
        </Card>
      )
    })

    return renderingInstagrams
  }

  render() {
    return (
      <Container id="instagram">
        <h3 className="smallTopAndBottomPadding"> <span className="centerAlign">@ALLTHINGSFRENCHIE_SHOP </span></h3>
        <h3 className="centerAlign"> <span className="onHoverItem secondaryColor">Follow us on Instagram</span></h3>

        <Card.Group itemsPerRow={4} stackable>
          {this.renderInstagram()}
        </Card.Group>

      </Container>
    )
  }
}

function mapStateToProps({ instagram, spinner }) {
  return { instagram, spinner };
}

export default connect(mapStateToProps, { fetchNewInstagramFeeds, setSpinner })(Instagram);
