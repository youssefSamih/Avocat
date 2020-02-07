import React, { Component } from 'react';
import { Sidebar, Segment } from "semantic-ui-react";

import { Content, Sidebare } from 'components/Layout';
import 'components/Layout/style.scss';

export default class MainLayout extends Component {
  state = {
    visible: true,
    dimmed: true
  }
  render() {
    const { children } = this.props;
    return (
      <main>
          <Sidebar.Pushable as={Segment} >
            <Sidebare visible={this.state.visible} />
            <Sidebar.Pusher>
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
