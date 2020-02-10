import React, { Component } from 'react';
import { Sidebar, Segment, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import { Content, Sidebare } from 'components/Layout';
import 'components/Layout/style.scss';

class MainLayout extends Component {
  state = {
    visible: this.props.breakpoint === 'xs' ?  false : true,
    dimmed: true,
    animation: 'push'
  }

  disableVisible = () => {
    this.setState({
      visible: !this.state.visible
    })
  };

  phoneMenu = () => {
    // this.setState({
    //   animation: 'overlay'
    // }, () => {
      this.disableVisible();
    // })
  } 

  render() {
    const { children } = this.props;
    console.log(this.props.breakpoint);
    return (
      <main>
        <Sidebar.Pushable as={Segment} >
          <Sidebare visible={this.state.visible} disableVisible={this.disableVisible} active={this.props.pathname} breakpoint={this.props.breakpoint} animation={this.state.animation} />
          <Sidebar.Pusher style={{transform: !this.state.visible ? (this.props.breakpoint == 'xs' ? 'translate3d(-15px, 0px, 0px)' : 'translate3d(90px,0,0)') : 'translate3d(110px, 0px, 0px)', width: this.props.breakpoint == 'xs' ? '121%' : 'auto' }} >
            <Segment basic>
              <Content fluid>
                <Icon name="list" className="iconMenu" onClick={() => this.phoneMenu()} style={{ left: this.state.visible ? 0 : '5%' }} />
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