import React from 'react';
import { Icon, Header, Container } from 'semantic-ui-react';
import Title from "components/Layout/title";

import './style.scss';

const presentation = props => {
  const removeEvent = () => {
    document.getElementsByClassName('segment')[0].removeEventListener("wheel", props.scroll);
    document.getElementsByClassName('container')[0].addEventListener("mouseleave", () => {
      document.getElementsByClassName('segment')[0].addEventListener("wheel", props.scroll);
    });
  }
  
  return (
    <div className="backgroundImgPresentation" style={{ height: props.backgroundHeight + 20 }}>
      <div className="overlayPresentation" style={{ height: props.backgroundHeight + 20 }}>
        <div className="header">
          <Title title="Presentation" />
          <div className="icon">
            <Icon name="twitter" />
            <Icon name="facebook f" />
            <Icon name="linkedin" />
          </div>
        </div>
        <div className="bodyContent">
          <Header as='h2'>A propos de maître Sabrina</Header>
          <Container onMouseEnter={() => removeEvent()}>
            <p>
              Avocat à Creil, Maître Sabrina BOUGOUFA intervient tant en matière de conseil que de contentieux, principalement en Droit pénal et Droit de la famille, des personnes et de leur patrimoine (divorce amiable sans juge, divorce contentieux: faute, altération définitive du lien conjugal, divorce accepté, séparation entre concubins, droit parentaux des enfants mineurs, droit de visite et d'hébergement, pension alimentaire, procédure en annulation de mariage, procédure en contestation de paternité...)
            </p>
            <p>
              Maître BOUGOUFA apporte à ses clients la compétence et la réactivité indispensables à leur information et à la défense de leurs intérêts, tant en conseil que lors d'une procédure judiciaire.
            </p>
            <p>
              En confiant un dossier à Maître BOUGOUFA, vous bénéficiez d'une confidentialité totale dans le traitement de votre dossier et des garanties qu'offre la profession d'avocat en matière d'expertise et de sécurité.
            </p>
          </Container>
          <span className="sign">Bougoufa</span>
        </div>
      </div>
    </div>
  );
}

export default presentation;
