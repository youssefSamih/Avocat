import React, { Component } from 'react'
import { Menu, Icon, Segment, Sidebar, Header } from 'semantic-ui-react';
// import { GiClockwiseRotation } from 'react-icons/gi'

class Sidebare extends Component {
  state = {
    transform: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        transform: true
      })
    }, 1500);
  }

  render() {
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
            <Icon name="list"/>
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='home'/>
            {this.props.visible ? 'Accueil' : ''}
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='address card outline'/>
            {this.props.visible ? 'Présentation' : ''}
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='balance scale'/>
            {this.props.visible ? 'Expertises' : ''}
          </Menu.Item>
          <Menu.Item as='a' className="contactborder">
            <Icon name='phone square'/>
            {this.props.visible ? 'Contact' : ''}
          </Menu.Item>
        </Sidebar>
        <Menu.Item className="twentyHours" style={this.state.transform ? styles.styleTransformafter : styles.styleTransformBefore } >
          <div className="iconStyle">
            <Icon name="clock outline" style={styles.styleClock} />
          </div>
          <span className="help" >Besoin d'aide</span><span className="questionMark">?</span>
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
  }
}

export default Sidebare