import React from 'react';
import Title from "components/Layout/title";
import { Icon, Header, List } from 'semantic-ui-react';
import { GiHand } from 'react-icons/gi'
import Slide from 'react-reveal/Slide'

import './style.scss';
import './customeExpertiseStyle.scss';

const lawContent = [
  'Procédures en responsabilité civile : indemnisation pour faute, dommages-intérêts',
  'Droit du patrimoine, transmission, régime matrimonial, SCI',
  'Successions, donations, héritages, tutelles, curatelles',
  'Droit des successions et des donations : héritages, testament, donations, legs',
  "Pension alimentaire, prestation compensatoire : calcul, revalorisation",
  'Conseil et assistance lors de procédures de divorce et séparation',
  'Divorces pour faute, divorces amiables par consentement mutuel …' ,
  'Droit des mineurs, contestation et reconnaissance de paternité, filiation, autorité parentale'
];

const creditContent = [
  'Droit pénal des affaires : fraude fiscale, abs, prises illégales d’intérêts',
  'Droit pénal général : défense des auteurs et victimes d\'infractions pénales',
  "Assistance pour des délits (vols, usage de stupéfiants, abus de faiblesse, faux…) et crimes",
  "Défense devant les tribunaux (police, correctionnel, assises, juridictions spécialisées…)",
  "Assistance garde à vue, assistance devant le Juge d’instruction",
  "Contraventions : infractions au code de la route, menaces, violences légères…",
  "Actions en diffamation, Droit de la Presse et interdictions de diffusion",
];

const penalContent = [
  "Litiges relatifs à un prêt à taux variable ou à un taux effectif global (TEG)",
  "Demande de suspension de paiement d'un prêt",
  "Litiges prêts personnels, prêts immobiliers, crédit revolving, solde débiteur…",
  "Recours contre une saisie sur un compte bancaire",
  "Défense des cautions",
  "Contentieux en matière de carte bancaire",
  "Conseil et défense des emprunteurs en matière de crédits à la consommation"
]

const expertise = props => {
  const removeEvent = () => {
    document.getElementsByClassName('segment')[0].removeEventListener("wheel", props.scroll);
    document.getElementsByClassName('bodyContent')[0].addEventListener("mouseleave", () => {
      document.getElementsByClassName('segment')[0].addEventListener("wheel", props.scroll);
    });
  }

  return (
    <div className="backgroundImgExpertise" style={{ height: props.backgroundHeight + 20 }}>
      <div className="overlayExpertise" style={{ height: props.backgroundHeight + 20 }}>
        <div className="header">
          <Title title="Expertises" />
          <div className="icon">
            <Icon name="twitter" />
            <Icon name="facebook f" />
            <Icon name="linkedin" />
          </div>
        </div>
        <div className="bodyContent" onMouseEnter={() => removeEvent()} >
          <Slide left>
            <div>
              <Header as="h1">
                <Icon name="users" />
                Droit de la famille, des personnes et de leur patrimoine
              </Header>
              <List as="ul">
                {
                lawContent.map((item, i) => (
                  <List.Item as="li" key={i}>
                    {item}
                  </List.Item>
                )) 
                }
              </List>
            </div>
            <div>
              <Header as="h1" style={{ marginTop: 0}} >
                <GiHand size={60} style={styles.handIconStyle} />
                Droit du crédit et de la consommation
              </Header>
              <List as="ul">
                {
                  creditContent.map((item, i) => (
                  <List.Item as="li" key={i}>
                    {item}
                  </List.Item>
                )) 
                }
              </List>
            </div>
            <div>
              <Header as="h1">
                <Icon name="credit card outline" />
                Droit pénal
              </Header>
              <List as="ul">
                {
                  penalContent.map((item, i) => (
                  <List.Item as="li" key={i}>
                    {item}
                  </List.Item>
                )) 
                }
              </List>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

const styles = {
  handIconStyle: {
    marginTop: '-6%',
    marginLeft: '30%'
  }
}

export default expertise;
