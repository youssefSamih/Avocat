import React, { Component } from 'react'
import { Menu, Icon, Sidebar, Header } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'

class Sidebare extends Component {
  state = {
    transform: false,
    clicked: false,
  }

  componentDidMount() {
    if(!this.state.transform){
      setTimeout(() => {
        this.setState({
          transform: true
        })
      }, 1500);
    }
  }

  handleClick = route => {
    this.props.history.push(route);
  }

  handleHelpClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  styleTwenty = () => {
    let style;
    if (this.state.transform) {
      if(this.state.clicked){
        if(this.props.breakpoint === 'xs' || this.props.breakpoint <= 425){
          style =  {
            ...styles.styleTransformafter,
            ...styles.clickedEventAfter,
            width: '90%'
          }
        } else {
          style =  {
            ...styles.styleTransformafter,
            ...styles.clickedEventAfter
          }
        }
      } else {
        style =  {
          ...styles.styleTransformafter,
          ...styles.clickedEventBefore
        }
      }
    } else {
      if(this.state.clicked){
        if(this.props.breakpoint === 'xs' || this.props.breakpoint <= 425){
          style = {
            ...styles.styleTransformBefore,
            ...styles.clickedEventAfter,
            width: '90%'
          }
        } else {
          style = {
            ...styles.styleTransformBefore,
            ...styles.clickedEventAfter,
          }
        }
      } else {
        style = {
          ...styles.styleTransformBefore,
          ...styles.clickedEventBefore
        }
      }
    }
    return style;
  }

  render() {
    const {visible, active, disableVisible, breakpoint, animation} = this.props;
    return (
      <>
        <Icon name="list" className="iconMenu" onClick={() => this.props.phoneMenu()} style={{ left: this.state.visible ? 0 : '5%', opacity: this.props.displayMenu ? 0 : 1}} />
        <Sidebar
          as={Menu}
          animation={animation}
          direction='left'
          icon='labeled'
          vertical
          visible={visible}
          width='thin'
          style={{ transition: 'width 0.50s', width: visible ? 150 : 93, zIndex: 10000 }}
          className={`${breakpoint === 'xs' || breakpoint <= 426 ? '' : 'visible'}`}
        >
          <Menu.Item as='a' className="logoContainer">
            <Header as="h1" textAlign="center" className='logo' style={{ width: visible ? '85%' : '60%'}} >
              <span>S</span><span>B</span>
            </Header>
            <p style={visible ? styles.displayBefore : styles.displayAfter} >Avocat</p>
          </Menu.Item>
          <Menu.Item as='a' onClick={() => disableVisible()} >
            <Icon name="list"/>
          </Menu.Item>
          <Menu.Item as='a' onClick={() => this.handleClick('/')} className={active === '/' ? 'active' : ''}>
            <Icon name='home'/>
            <p style={visible ? styles.displayBefore : styles.displayAfter}>Accueil</p>
          </Menu.Item>
          <Menu.Item as='a' onClick={() => this.handleClick('/presentation')} className={active === '/presentation' ? 'active' : ''}>
            <Icon name='address card outline'/>
            <p style={visible ? styles.displayBefore : styles.displayAfter}>Présentation</p>
          </Menu.Item>
          <Menu.Item as='a' onClick={() => this.handleClick('/expertises')} className={active === '/expertises' ? 'active' : ''}>
            <Icon name='balance scale'/>
            <p style={visible ? styles.displayBefore : styles.displayAfter}>Expertises</p>
          </Menu.Item>
          <Menu.Item as='a' className="contactborder" onClick={() => this.handleClick('/contact')} className={active === '/contact' ? 'active' : ''}>
            <Icon name='phone square'/>
            <p style={visible ? styles.displayBefore : styles.displayAfter}>Contact</p>
          </Menu.Item>
        </Sidebar>
        <Menu.Item className="twentyHours" style={this.styleTwenty()}>
          {
            !this.state.clicked ? (
              <>
                <div className="iconStyle" onClick={() => this.handleHelpClick()} style={this.state.clicked ? styles.helpClickedbefore : styles.helpClickedAfter}>
                  <Icon name="clock outline" style={styles.styleClock} />
                </div>
                <span className="help" style={this.state.clicked ? styles.helpClickedbefore : styles.helpClickedAfter} >Besoin d'aide</span><span className="questionMark">?</span>
              </>
            ) : (
              <>
                <div className="iconClose" style={visible ? styles.styleCloseBefore : styles.styleCloseAfter} onClick={() => this.handleHelpClick()} >
                  <AiOutlineClose style={styles.styleClock} />
                </div>
                <span className="border" style={visible ? styles.borderBeforeStyle : styles.borderAfterStyle} />
                <div className="helpClicked" style={!this.state.clicked ? styles.helpClickedbefore : styles.helpClickedAfter} >
                  <Icon name="handshake outline" size="big" />
                  <span>Prendre RDV</span>
                  <Icon name="phone" size="big" />
                  <span>Demander un rappel</span>
                  <Icon name="envelope outline" size="big" />
                  <span>Consulter par écrit</span>
                </div>
              </>
            )
          }
        </Menu.Item>
      </>
    )
  }
}

const styles = {
  styleClock: { 
    fontSize: '34px' 
  },
  styleTransformBefore: {
    transform: 'translateX(-100%)'
  },
  styleTransformafter: {
    transition: 'transform 0.50s',
    transform: 'translateX(0)'
  },
  styleCloseBefore: {
    transition: 'width 0.50s',
    marginLeft: '9%'
  },
  styleCloseAfter: {
    marginLeft: '5%'
  },
  borderBeforeStyle: {
    marginLeft: '8%'
  },
  borderAfterStyle: {
    marginLeft: '3%'
  },
  clickedEventBefore: {
    transition: 'transform 0.50s, width 0.10s ease 0.1s',
    width: 206
  },
  clickedEventAfter: {
    transition: 'transform 0.50s, width 0.10s ease 0.1s',
    width: 684
  },
  helpClickedbefore: {
    transition: 'opacity 3s',
    opacity: 0.01,
  },
  helpClickedAfter: {
    transition: 'opacity 3s',
    opacity: 1,
  },
  displayBefore: {
    transition: 'opacity .7s',
    display: 'block'
  },
  displayAfter:{
    transition: 'opacity .7s',
    display: 'none'
  }
}

export default withRouter(Sidebare)