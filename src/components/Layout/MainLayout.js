import React, { Component } from 'react';
import { Sidebar, Segment } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import { Content, Sidebare } from 'components/Layout';
import 'components/Layout/style.scss';

class MainLayout extends Component {
  state = {
    visible: true,
    dimmed: true
  }

  disableVisible = () => {
    this.setState({
      visible: !this.state.visible
    })
  };

  render() {
    const { children } = this.props;
    return (
      <main>
          <Sidebar.Pushable as={Segment} >
            <Sidebare visible={this.state.visible} disableVisible={this.disableVisible} active={this.props.pathname} />
            <Sidebar.Pusher style={{transform: !this.state.visible ? 'translate3d(90px,0,0)' : 'translate3d(150px,0,0)'}} >
              <Segment basic>
                <Content fluid>
                  {children}
                  </Content>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
      </main>
    )
  }
}

export default withRouter(MainLayout);