import React, { Component } from "react"
import styled from "@emotion/styled"


const Cadre = styled.div`{
    margin-top: 25px;
    width: 100%;
    }`

const Title = styled.h1`{
    text-align: center;
    text-transform: uppercase;
}`

const Unline = styled.div`{
    width: 5%;
    text-align: center;
    margin: 7px auto 0 auto;
    border-top: 7px solid rgb(192, 114, 11);
}`

const Form = styled.form`
    width: 95%;
    margin: 50px auto 0 auto;
`

const Input = styled.input`{
    width: 98.4%;
    height: 25px;
    border: 1px solid #111;
    margin: 12px auto;
}`

const Message = styled.input`{
  width: 98.4%;
  height: 250px;
  border: 1px solid #111;
  margin: 12px auto;
}`

class Contact extends Component {
    render() {
      return (
          <Cadre id="contact">
              <Title>Contact</Title>
              <Unline />
        <div className="head-pages">
          <p>
            <b>Votre réservation</b> <br />
            Ici nous pouvons indiquer les conditons et modalités de réservation
            d'une chambre{" "}
          </p>
        </div>
        <Form>
          <Input type="text" id="nom" name="nom" placeholder="Votre nom" />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Votre E-mail"
          />
          <Input
            type="text"
            id="objet"
            name="objet"
            placeholder="Objet de votre demande"
          />
          <Message
            type="text"
            id="message"
            name="message"
            placeholder="Votre message"
          />
          <button type="submit">Envoyer</button>
        </Form>
          </Cadre>
      )
    }
  }
  
  export default Contact