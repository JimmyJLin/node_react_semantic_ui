import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import SASS
import './App.scss';

// main Components
import ScrollToTop from './ScrollToTop';
import Header from './navbar/header/Header';
import Footer from './footer/Footer';
import Landing from './landing/Landing';

// Shops components
import Women from './shops/Women';
import Men from './shops/Men';
import Jewelry from './shops/Jewelry';
import Bags_Accessories from './shops/Bags_Accessories';
import Socks from './shops/Socks';
import Sales from './shops/Sales';
import New from './shops/New';
import PuffStuff from './shops/PuffStuff';
import Product from './shops/product/Product';

// Checkout components
import CheckoutCart from './checkout/CheckoutCart';

// legal components
import Faq from './legal/Faq';
import Privacy from './legal/Privacy';
import Returns_exchanges from './legal/Returns_exchanges';
import Shipping from './legal/Shipping';
import Terms_service from './legal/Terms_service';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <ScrollToTop>
              <Header />
              <Route exact path="/" component={Landing} />

              {/* Shop Routes */}
              <Route path="/shops/women" component={Women} />
              <Route path="/shops/men" component={Men} />
              <Route path="/shops/jewelry" component={Jewelry} />
              <Route path="/shops/bags_accessories" component={Bags_Accessories} />
              <Route path="/shops/socks" component={Socks} />
              <Route path="/shops/sales" component={Sales} />
              <Route path="/shops/new" component={New} />
              <Route path="/shops/puff_stuff" component={PuffStuff} />

              {/* Product Routes */}
              <Route path="/products/:name/:id" component={Product} />

              {/* Checkout Routes */}
            <Route path="/checkout/shopping_cart" component={CheckoutCart} />

              {/* Legal Routes */}
              <Route path="/legal/faq" component={Faq} />
              <Route path="/legal/privacy" component={Privacy} />
              <Route path="/legal/returns_and_exchanges" component={Returns_exchanges} />
              <Route path="/legal/shipping" component={Shipping} />
              <Route path="/legal/terms_and_conditions" component={Terms_service} />


              <Footer />
            </ScrollToTop>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
