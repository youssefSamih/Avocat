import React, { Component } from 'react'
import { Menu, Icon, Segment, Sidebar, Header } from 'semantic-ui-react';
// import { GiClockwiseRotation } from 'react-icons/gi'

class Sidebare extends Component { render() {
    return (
      <>
        <Sidebar
          as={Menu}
          animation="push"
          direction='left'
          icon='labeled'
          vertical
          visible={this.props.visible}
          width='thin'
          style={{ transition: 'width 0.25s', width: this.props.visible ? 150 : 93 }}
          className="visible"
        >
          <Menu.Item as='a' className="logoContainer">
            <Header as="h1" textAlign="center" className='logo' style={{ width: this.props.visible ? '85%' : '60%'}} >
              <span>S</span><span>B</span>
            </Header>
            <p>{this.props.visible ? 'Avocat' : ''}</p>
          </Menu.Item>
          <Menu.Item as='a' onClick={() => this.props.disableVisible()} >
            <Icon name="list" style={{ color: "#3C3B4A" }} />
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='home' style={{ color: "#3C3B4A" }} />
            {this.props.visible ? 'Accueil' : ''}
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='address card outline' style={{ color: "#3C3B4A" }} />
            {this.props.visible ? 'Présentation' : ''}
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='balance scale' style={{ color: "#3C3B4A" }} />
            {this.props.visible ? 'Expertises' : ''}
          </Menu.Item>
          <Menu.Item as='a' className="contactborder">
            <Icon name='phone square' style={{ color: "#3C3B4A" }} />
            {this.props.visible ? 'Contact' : ''}
          </Menu.Item>
        </Sidebar>
        <Menu.Item className="twentyHours">
          <div className="iconStyle">
            <Icon name="clock outline" style={{ fontSize: '34px' }} />
          </div>
          <span className="help" >Besoin d'aide</span><span className="questionMark">?</span>
        </Menu.Item>
      </>
    )
  }
}

export default Sidebare