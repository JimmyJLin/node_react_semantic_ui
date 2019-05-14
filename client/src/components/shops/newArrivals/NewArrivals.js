import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Sliders from 'react-slick';

import { fetchNewArrivals } from '../../../actions';
import { Container, Image, Grid, Button } from 'semantic-ui-react'

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
    // console.log('fetchNewArrivals', this.state.newArrivals)
  }

  renderCards() {

    return this.state.newArrivals.sort(function(a, b){return 0.5 - Math.random()}).map(({ product_id, title, images, variants, handle }) => {
      const productData = {
        id: product_id,
        handle: handle
      }
      return (
        <Container
          data={productData}
          as={NavLink}
          to={{
            pathname: `/products/${handle}`,
            state: {
              product_id: product_id
            }
          }}
          key={product_id}
          id="multi_card_container"
        >
          <Image className="square zoom" src={images[0].src} fluid/>
          <div id="multi_card_body">
            <h5>{title}</h5>
            <p>$ {variants[0].price}</p>
          </div>
        </Container>
      )
    })
  }

  render() {
    const settings ={
      dots: true,
      infinite: true,
      autoplay: false,
      lazyLoad: true,
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
            dots: false,
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

        <Grid.Row className="buttonContainer">
          <Button as={Link} className="moreButton" to="/shops/new" color="black">
            <Button.Content visible>
              & More ... >
            </Button.Content>
          </Button>
        </Grid.Row>

      </Container>
    )
  }
}

function mapStateToProps({ newArrivals }) {
  return { newArrivals }
}

export default connect(mapStateToProps, { fetchNewArrivals })(NewArrivals);
