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
        >
          <Menu.Item as='a' className="logoContainer">
            <Header as="h1" textAlign="center" className='logo' >
              <span>S</span><span>B</span>
            </Header>
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name="list" style={{ color: "#3C3B4A" }} />
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='home' style={{ color: "#3C3B4A" }} />
            Accueil
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='address card outline' style={{ color: "#3C3B4A" }} />
            Présentation
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='balance scale' style={{ color: "#3C3B4A" }} />
            Expertises
          </Menu.Item>
          <Menu.Item as='a' className="contactborder">
            <Icon name='phone square' style={{ color: "#3C3B4A" }} />
            Contact
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