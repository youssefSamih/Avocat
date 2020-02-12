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
];
const scrolEl = document.getElementsByClassName('scrol');
const present = document.getElementsByClassName('overlayExpertise');
const contact = document.getElementsByClassName('contactForm');

class Container extends Component {
  state = {
    backgroundHeight: window.innerHeight,
    displayMenu: false
  }

  componentDidMount(){
    window.addEventListener('load', () => {
      this.setState({
        backgroundHeight: this.jsUpdateSize()
      })
    });
    window.addEventListener('resize', () => {
      this.setState({
        backgroundHeight: this.jsUpdateSize()
      })
    });
    document.getElementsByClassName('segment')[0].addEventListener("wheel", this.onScroll);
  }

  jsUpdateSize = () => {
    let height = window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight;
    return height;
  };
  
  handle(delta) {
    let time = 9;
    let distance = 9;
    document.querySelector('html, body').animate({
      scrollTop: document.querySelector('html, body').scrollTop - (distance * delta)
    }, time);
  }

  HideMenuIcon = () => {
    if(scrolEl[0]){
      scrolEl[0].addEventListener('scroll', e => {
        if(scrolEl[0].scrollTop > 0) {
          this.setState({
            displayMenu: true
          })
        } else {
          this.setState({
            displayMenu: false
          })
        }
      });
    }
    if(present[0]) {
      present[0].addEventListener('scroll', e => {
        if(present[0].scrollTop > 0) {
          this.setState({
            displayMenu: true
          })
        } else {
          this.setState({
            displayMenu: false
          })
        }
      });
    }
    if(contact[0]) {
      contact[0].addEventListener('scroll', e => {
        if(contact[0].scrollTop > 0) {
          this.setState({
            displayMenu: true
          })
        } else {
          this.setState({
            displayMenu: false
          })
        }
      });
    }
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

  render(){
    return (
      <Wrapper>
        <Switch>
          <MainLayout 
            pathname={this.props.location.pathname} 
            routes={routes} breakpoint={this.props.breakpoint} 
            backgroundHeight={this.state.backgroundHeight}
            displayMenu={this.state.displayMenu}
          >
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={this.props.location.key}
                timeout={{ enter: 900, exit: 500 }}
                classNames="fade"
              >
                <React.Fragment>
                  {
                    routes.map((item, i) => {
                      let Component = item.component
                      if(i === 0) {
                        return (
                            <Route key={i} exact path={item.route} render={() => <Component breakpoint={this.props.breakpoint} scroll={this.onScroll} backgroundHeight={this.state.backgroundHeight} HideMenuIcon={this.HideMenuIcon} />} />
                        )
                      }
                      return (
                            <Route key={i} path={item.route} render={() => <Component breakpoint={this.props.breakpoint} scroll={this.onScroll} backgroundHeight={this.state.backgroundHeight} HideMenuIcon={this.HideMenuIcon} />} />
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
    transform: translateY(100%);
  }

  .fade-enter.fade-enter-active {
    transform: translateY(0);
    transition: transform 500ms ease-in-out;
  }

  .fade-exit {
    transform: translateY(0);
  }

  .fade-exit.fade-exit-active {
    transform: translateY(100%);
    transition: transform 500ms ease-in-out;
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
