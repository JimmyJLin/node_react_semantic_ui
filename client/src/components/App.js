import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Skincare from './services/Skincare';
import Treatments from './services/Treatments';
import Microblading from './services/Microblading';
import Collin from './services/Collin';

const Book = () => <h2>Book</h2>
const Promotion = () => <h2>Promotion</h2>


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <ScrollToTop>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route path="/services/Skincare" component={Skincare} />
              <Route path="/services/Treatments" component={Treatments} />
              <Route path="/services/Microblading" component={Microblading} />
              <Route path="/services/Collin" component={Collin} />
              <Route path="/book" component={Book} />
              <Route path="/promotion" component={Promotion} />
              <Footer />
            </ScrollToTop>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
