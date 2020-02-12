import React, { useState } from 'react';
import { Form, Button, Container } from "semantic-ui-react";
import Zoom from 'react-reveal/Zoom';
import Title from "components/Layout/title";

const Formul = props => {
  const [load, setLoad] = useState(false);
  const removeEvent = () => {
    document.getElementsByClassName('segment')[0].removeEventListener("wheel", props.scroll);
    document.getElementsByClassName('contactForm')[0].addEventListener("mouseleave", () => {
      document.getElementsByClassName('segment')[0].addEventListener("wheel", props.scroll);
    });
  }

  const handleSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }

  return (
    <div className="contactForm" onMouseEnter={() => removeEvent()} >
    <Container>
      <Zoom>
        <Title title="Contactez-nous" />
        <p>Adresse du cabinet : 42, avenue du Maréchal Foch, SENLIS (60300).</p>
        <Form>
          <Form.Field className="floating-label-wrap">
            <input placeholder='Votre Nom' className="floating-label-field floating-label-field--s3" id="name" />
            <label htmlFor="name" className="floating-label">Votre Nom</label>
          </Form.Field>
          <Form.Field>
            <input placeholder='Votre Prenom' className="floating-label-field floating-label-field--s3" id="lname" />
            <label htmlFor="lname" className="floating-label">Votre Prenom</label>
          </Form.Field>
          <Form.Field>
            <input placeholder='Adresse mail' className="floating-label-field floating-label-field--s3" id="amail" />
            <label htmlFor="amail" className="floating-label">Adresse mail</label>
          </Form.Field>
          <Form.Field>
            <input placeholder='Sujet' className="floating-label-field floating-label-field--s3" id="sujet" />
            <label htmlFor="sujet" className="floating-label">Sujet</label>
          </Form.Field>
          <Form.Field style={{ marginTop: '5%' }}>
            <label htmlFor="msg" className="floating-label float-label">Message</label>
            <textarea placeholder='Message' className="floating-label-field floating-label-field--s3" id="msg" />
          </Form.Field>
          <Button type='submit' className="submit" loading={load} onClick={() => handleSubmit()} >Envoyer</Button>
        </Form>
      </Zoom>
    </Container>
    </div>
  );
}

export default Formul;
