import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from "styled-components";

import MainLayout from 'components/Layout/MainLayout';

import Accueil from 'pages/Accueil';
import Presentation from 'pages/presentation';
import Contact from 'pages/contact';
import Expertise from 'pages/expertise';

const routes = [
  {route: '/', component: Accueil },
  {route: '/presentation', component: Presentation },
  {route: '/expertises', component: Expertise },
  {route: '/contact', component: Contact },
]
class Container extends Component {
  state = {
    backgroundHeight: window.innerHeight 
  }

  componentDidMount(){
    document.getElementsByClassName('segment')[0].addEventListener("wheel", this.onScroll);
  }
  
  handle(delta) {
    let time = 9;
    let distance = 9;
    document.querySelector('html, body').animate({
      scrollTop: document.querySelector('html, body').scrollTop - (distance * delta)
    }, time);
  }

  onScroll = e => {
    e.preventDefault();
    let indexOfPath = routes.findIndex(item => item.route == this.props.location.pathname);
    let lengthRoute = routes.length - 1;
    let delta = 1000;
    if (e.wheelDelta) {(delta = e.wheelDelta / 120);}
    else if (e.detail) {(delta = -e.detail / 3);}

    this.handle(delta);
    if (e.preventDefault) {(e.preventDefault());}
    e.returnValue = false;
    if(indexOfPath - 1 < 0) {
      indexOfPath = 0;
    }
    if (e.deltaY > 0){
      if(indexOfPath - 1 < 0) {
        indexOfPath = 1;
        this.props.history.push(routes[lengthRoute].route);
      } else {
        this.props.history.push(routes[indexOfPath - 1].route);
      }
    } else {
      if(indexOfPath + 1 > lengthRoute) {
        indexOfPath = lengthRoute - 1;
        this.props.history.push(routes[0].route);
      } else {
        this.props.history.push(routes[indexOfPath + 1].route);
      }
    }
  }

  componentWillReceiveProps() {
    // console.log(nextProps);
    this.setState({
      backgroundHeight: window.innerHeight
    })
  }

  render(){
    // console.log(this.state.backgroundHeight);
    console.log(this.props);
    return (
      <Wrapper>
        <Switch>
          <MainLayout 
            pathname={this.props.location.pathname} 
            routes={routes} breakpoint={this.props.breakpoint} 
            backgroundHeight={this.state.backgroundHeight}
          >
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={this.props.location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
              >
                <React.Fragment>
                  {
                    routes.map((item, i) => {
                      let Component = item.component
                      return (
                        <Route key={i} exact path={item.route} render={() => <Component breakpoint={this.props.breakpoint} scroll={this.onScroll} backgroundHeight={this.state.backgroundHeight} />} />
                      )
                    })
                  }
                </React.Fragment>
              </CSSTransition>
            </TransitionGroup>
          </MainLayout>
        </Switch>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
    ${'' /* transform: translateY(-100%); */}
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    ${'' /* transform: translateY(0); */}
    transition: opacity 300ms ease;
  }

  .fade-exit {
    opacity: 1;
    ${'' /* transform: translateY(100%); */}
  }

  .fade-exit.fade-exit-active {
    ${'' /* transform: translateY(100%); */}
    transition: opacity 300ms ease;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  body::-webkit-scrollbar-track {
    display: none !important;
    opacity: 0;
  }
`;

export default withRouter(Container);
