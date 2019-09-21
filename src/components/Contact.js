import React, { Component } from "react"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"

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
    color: rgb(192, 114, 11);
`

const Input = styled.input`{
    width: 98.4%;
    height: 20px;
    border: 1px solid #111;
    margin: 12px auto;
    color: rgb(192, 114, 11);
    padding: 5px;
}`

const Message = styled.textarea`{
  width: 98.4%;
  height: 200px;
  border: 1px solid #111;
  margin: 12px auto;
  padding: 5px;
}`

const Envoyer = styled.button`{
  width: 115px;
  height: 40px;
  border: 1px solid #111;
  margin: 12px auto;
  color: #fff;
  background: rgb(192, 114, 11);
  cursor: pointer;
  :hover{
    background: #fff;
    color: rgb(192, 114, 11);
    transition: 0.2s;
  }

  @media screen and (max-width: 762px) {
      margin: 1px auto;
    }

}`

const Wrapper = styled.div`{
  width: 100%;
  margin: 3%;
}`

class Contact extends Component {
    render() {
      return (
        <Fade left>
          <Cadre id="contact">
              <Title>Contact</Title>
              <Unline />
        <Wrapper>
          <p>
            <b>Vous souhaitez me contacter ?</b> <br />
            Remplissez le formulaire ci-dessous je m'engage à répondre dans les plus bref délais{" "}
          </p>
          </Wrapper>
        <Form action="https://hooks.zapier.com/hooks/catch/5739033/o2bw6nh/" method="POST">
          <Input required type="text" id="nom" name="nom" placeholder="Votre nom" />
          <Input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Votre E-mail"
          />
          <Input
            required
            type="text"
            id="objet"
            name="objet"
            placeholder="Objet de votre demande"
          />
          <Message
            required
            type="text"
            id="message"
            name="message"
            placeholder="Votre message"
          />
          <Envoyer 
            required
            id="submit" 
            name="submit" 
            type="submit">Envoyer</Envoyer>
        </Form>
          </Cadre>
          </Fade>
      )
    }
  }
  
  export default Contact