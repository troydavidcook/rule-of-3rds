import React, { Component } from 'react';
import './App.css';
import Image from './Image/Image';

class App extends Component {
  render() {

    return (

      // state = {
      // images: [ "https://imgur.com/co0Wj8n" ,
      //             "https://imgur.com/zKRzMdW",
      //             "https://imgur.com/SMOPTSo",
      //         ],
      // },

      <div className="App">
        <h3>Navbar up top</h3>
        <h5>Hoverable grid pics, before and afters?</h5>
        <Image />
      </div>
    );
  }
}

export default App;
