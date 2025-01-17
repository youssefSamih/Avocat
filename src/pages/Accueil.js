import React from 'react';
import { Icon, Header, Image, Button } from 'semantic-ui-react';
import Typical from 'react-typical'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { withRouter } from "react-router-dom";

import profileImg from 'assets/img/sabrina.jpg';
import scroll from 'assets/img/scroll.png';
import './style.scss';

const description = 'Avocat à Creil, Maître Sabrina BOUGOUFA intervient tant en matière de conseil que de contentieux, principalement en Droit pénal et Droit de la famille, des personnes et de leur patrimoine';

class Accueil extends React.Component {
  removeEvent = () => {
    document.getElementsByClassName('segment')[0].removeEventListener("wheel", this.props.scroll);
    document.getElementsByClassName('bodyContent')[0].addEventListener("mouseleave", () => {
      document.getElementsByClassName('segment')[0].addEventListener("wheel", this.props.scroll);
    });
  }

  state={
    scrollAnimate: false,
    backgroundHeight: 100
  }

  componentDidMount(){
    const scrollAnimate = () => {
      this.setState({
        scrollAnimate: !this.state.scrollAnimate
      })
    }
    this.scrollAnimate = setInterval(scrollAnimate,900);
  }

  componentWillUnmount() {
    clearInterval(this.scrollAnimate);
  }

  render(){
    return (
      <div className="backgroundImgHome scrol" style={{ height: this.props.backgroundHeight + 20 }}>
        <div className="overlayHome">
          <div className="head">
            <div className="icon">
              <Icon name="twitter" />
              <Icon name="facebook f" />
              <Icon name="linkedin" />
            </div>
          </div>
          <div className="bodyContent" onMouseEnter={() => this.removeEvent()} >
            <Header as="h2" className="maitr">Maître</Header>
            <Header as="h1" className="name">
            <Typical
                steps={['Sabrina BOUGOUFA!', 1000]}
                loop={1}
                wrapper='p'
              />
            </Header>
            <div className="homePresnt">
                <div className="profileImg">
                  <Image src={profileImg} size='medium' circular />
                </div>
                <span className="borderRight" />
                <div className="contentHome">
                  <div className="profileIntro">
                      <p>{description}</p>
                    <div className="arrow">
                      <span>La suite</span>
                      <FaLongArrowAltRight />
                    </div>
                  </div>
                  <div className="buttonHome">
                    <Button inverted size="big" >Prendre RDV</Button>
                    <Button inverted size="big">Consulter Par ecrit</Button>
                  </div>
                </div>
            </div>
            <div className="scrollEvent" onClick={() => this.props.history.push("/presentation") } >
              <div className="scrollBottom" style={this.state.scrollAnimate ? styles.scrollAfter : styles.scrollBefore }>
                <Image src={scroll} size="small" />
              </div>
              <span className="scrollFlex" >></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles ={
  scrollBefore: {
    transition: 'transform 0.9s ease-in-out' ,
    transform: 'translateY(-20px)'
  },
  scrollAfter: {
    transition: 'transform 0.9s ease-in-out' ,
    transform: 'translateY(0px)'
  }
}

export default withRouter(Accueil);
