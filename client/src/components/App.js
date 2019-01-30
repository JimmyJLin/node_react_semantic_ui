import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
const Services = () => <h2>Services</h2>
const Book = () => <h2>Book</h2>
const Contact = () => <h2>Contact</h2>


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
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
