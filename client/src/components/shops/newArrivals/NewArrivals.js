import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sliders from 'react-slick';

import { fetchNewArrivals } from '../../../actions';
import { Container, Card, Image } from 'semantic-ui-react'

import './_newArrivals.scss'

function NextArrow(props) {
  const {className, onClick} = props
  return (
    <div
      className={className}
      style={{ display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, onClick} = props
  return (
    <div
      className={className}
      style={{ display: 'block', background: 'green'}}
      onClick={onClick}
    ></div>
  );
}

class NewArrivals extends Component {
  state = {
    newArrivals: []
  }

  async componentDidMount() {
    await this.props.fetchNewArrivals();
    this.setState({
      newArrivals: this.props.newArrivals
    })
    console.log('fetchNewArrivals', this.state.newArrivals)
  }

  renderCards() {
    return this.state.newArrivals.map(({ product_id, title, images, variants }) => {
      return (
        <div key={product_id} id="multi_card_container">
          <Image className="square" src={images[0].src} fluid/>
          <div id="multi_card_body">
            <h4>{title}</h4>
            <p>$ {variants[0].price}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    const settings ={
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    return (
      <Container id="new_arrivals">
        <h2 id="title">New Arrivals</h2>
        <Sliders {...settings}>

          {this.renderCards()}

        </Sliders>
      </Container>
    )
  }
}

function mapStateToProps({ newArrivals }) {
  return { newArrivals }
}

export default connect(mapStateToProps, { fetchNewArrivals })(NewArrivals);
