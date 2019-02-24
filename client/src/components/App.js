import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import SASS
import './App.scss';

// main Components
import ScrollToTop from './ScrollToTop';
import Header from './navbar/Header';
import Footer from './footer/Footer';
import Landing from './landing/Landing';

// Shops components
import Women from './shops/Women';
import Men from './shops/Men';
import Jewelry from './shops/Jewelry';
import Bags_Accessories from './shops/Bags_Accessories';
import Socks from './shops/Socks';
import Sales from './shops/Sales';

import Cart from './checkout/Cart';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <ScrollToTop>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route path="/shops/women" component={Women} />
              <Route path="/shops/men" component={Men} />
              <Route path="/shops/jewelry" component={Jewelry} />
              <Route path="/shops/bags_accessories" component={Bags_Accessories} />
              <Route path="/shops/socks" component={Socks} />
              <Route path="/shops/sales" component={Sales} />
              <Route path="/checkout/shopping_cart" component={Cart} />

              <Footer />
            </ScrollToTop>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
