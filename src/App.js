import React, { Component } from 'react';

import Header from './components/Header/Header';
import Middle from './components/Middle/Middle';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Middle/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
