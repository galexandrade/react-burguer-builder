import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder></BurguerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
