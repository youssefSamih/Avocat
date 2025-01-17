import React, { Component } from 'react';
import { Sidebar, Segment } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import { Content, Sidebare } from 'components/Layout';
import 'components/Layout/style.scss';

class MainLayout extends Component {
  state = {
    visible: this.props.breakpoint === 'xs' || this.props.breakpoint <= 426 ?  false : true,
    dimmed: true,
    animation: 'push',
    displayMenu: this.props.displayMenu
  }

  disableVisible = () => {
    this.setState({
      visible: !this.state.visible
    })
  };

  phoneMenu = () => {
      this.disableVisible();
  }

  render() {
    const { children } = this.props;
    return (
      <main style={{ height: this.props.backgroundHeight }}>
        <Sidebar.Pushable as={Segment} >
          <Sidebare 
            visible={this.state.visible} 
            disableVisible={this.disableVisible} 
            active={this.props.pathname} 
            breakpoint={this.props.breakpoint}
            animation={this.state.animation}
            phoneMenu={this.phoneMenu}
            displayMenu={this.props.displayMenu}
          />
          <Sidebar.Pusher style={{transform: !this.state.visible ? (this.props.breakpoint == 'xs' || this.props.breakpoint <= 426 ? 'translate3d(-15px, 0px, 0px)' : 'translate3d(90px,0,0)') : 'translate3d(110px, 0px, 0px)', width: this.props.breakpoint == 'xs' || this.props.breakpoint <= 426 ? '121%' : 'auto' }} >
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