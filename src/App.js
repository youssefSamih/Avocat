import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter } from "react-router-dom";

import Container from './container';

import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Container breakpoint={this.props.breakpoint} />
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 420) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: width };
};

export default componentQueries(query)(App);
