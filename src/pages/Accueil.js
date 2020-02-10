import React from 'react';
import Title from "components/Layout/title";
import { Icon, Header, Image, Button } from 'semantic-ui-react';

import './style.scss';
import profileImg from 'assets/img/sabrina.jpg';
import scroll from 'assets/img/scroll.png';

class Accueil extends React.Component {
  state={
    scrollAnimate: false
  }
  componentDidMount(){
    const scrollAnimate = () => {
      this.setState({
        scrollAnimate: !this.state.scrollAnimate
      })
    }
    this.scrollAnimate = setInterval(scrollAnimate,400);
  }
  

  componentWillUnmount() {
    clearInterval(this.scrollAnimate);
  }

  render(){
    return (
      <div className="backgroundImgHome">
        <div className="overlayHome">
          <div className="head">
            <div className="icon">
              <Icon name="twitter" />
              <Icon name="facebook f" />
              <Icon name="linkedin" />
            </div>
          </div>
          <div className="bodyContent">
            <Header as="h2" className="maitr">Maître</Header>
            <Header as="h1" className="name">Sabrina BOUGOUFA</Header>
            <div className="homePresnt">
              <div className="profileImg">
                <Image src={profileImg} size='medium' circular />
              </div>
              <span className="borderRight" />
              <div className="contentHome">
                <p>
                  Avocat à Creil, Maître Sabrina BOUGOUFA intervient tant en matière de conseil que de contentieux, principalement en Droit pénal et Droit de la famille, des personnes et de leur patrimoine
                </p>
                <div className="buttonHome">
                  <Button inverted size="big" >Prendre RDV</Button>
                  <Button inverted size="big">Consulter Par ecrit</Button>
                </div>
              </div>
            </div>
            <div className="scrollBottom" style={this.state.scrollAnimate ? styles.scrollAfter : styles.scrollBefore }>
              <Image src={scroll} size="small" />
            </div>
            <span className="scrollFlex" >></span>
          </div>
        </div>
      </div>
    );
  }
}

const styles ={
  scrollBefore: {
    transition: 'transform 0.5s ease' ,
    transform: 'translateY(-20px)'
  },
  scrollAfter: {
    transition: 'transform 0.5s ease' ,
    transform: 'translateY(0px)'
  }
}

export default Accueil;
