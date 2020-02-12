import React from 'react';

import Map from 'components/Map';
import Form from 'components/Form';

class contact extends React.Component {
  componentDidMount() {
    this.props.HideMenuIcon();
  }

  render(){
    return (
      <>
        <Form scroll={this.props.scroll} />
        <Map breakpoint={this.props.breakpoint} backgroundHeight={this.props.backgroundHeight} />
      </>
    );
  }
}

export default contact;