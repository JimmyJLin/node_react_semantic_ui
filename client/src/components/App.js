import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Header from './navbar/Header';
import Footer from './Footer';
import HeaderImgWithText from './body/HeaderImgWithText';
import Landing from './Landing';
const Services = () => <h2>Services</h2>
const Book = () => <h2>Book</h2>
const Contact = () => <h2>Contact</h2>


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <HeaderImgWithText />
            <Route exact path="/" component={Landing} />
            <Route path="/services" component={Services} />
            <Route path="/book" component={Book} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
