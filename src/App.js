import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter } from "react-router-dom";

import Container from './container';

import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  state = {
    breakpoint: this.props.breakpoint
  }

  render() {
    // console.log(this.props.breakpoint);
    return (
      <BrowserRouter basename="/.avocat">
          <Container breakpoint={this.state.breakpoint} />
      </BrowserRouter>
    );
  }
}
let compQuery = {
  queries: [
    ({width, height}) => { 
      if (width < 420) {
        return { breakpoint: 'xs', height: height };
      }
    
      if (576 < width && width < 767) {
        return { breakpoint: 'sm', height: height };
      }
    
      if (768 < width && width < 991) {
        return { breakpoint: 'md', height: height };
      }
    
      if (992 < width && width < 1199) {
        return { breakpoint: 'lg', height: height };
      }
    
      if (width > 1200) {
        return { breakpoint: 'xl', height: height };
      }
    
      return { breakpoint: width, height: height };
    },
  ],
  config: {
    monitorWidth: true,
    monitorHeight: false,
    refreshRate: 16,
    pure: true
  }
}

export default componentQueries(compQuery)(App);
