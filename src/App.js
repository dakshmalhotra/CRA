import React, { Component } from 'react';

import Header from './components/Header/Header';
import Middle from './components/Middle/Middle';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
			<Header/>
			<Middle/>
			<Footer/>
      </div>
    );
  }
}

export default App;
