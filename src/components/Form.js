import React from 'react';
import { Form, Button, Container } from "semantic-ui-react";

const Formul = () => {
  return (
    <div className="contactForm">
    <Container>
      <h4 className="title" >Contactez-nous</h4>
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
        <Button type='submit' className="submit" >Envoyer</Button>
      </Form>
    </Container>
    </div>
  );
}

export default Formul;
