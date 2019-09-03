import React, { Component } from "react"
import Iframe from 'react-iframe'
import styled from"@emotion/styled"

const Cadre = styled.div`{
    background-color: #393B37;
    width: 100%;
    height:600px;
    }`

const Title = styled.h1`{
    text-align: center;
    text-transform: uppercase;
}`

const Unline = styled.div`{
    width: 5%;
    text-align: center;
    margin: 7px auto 25px auto;
    border-top: 7px solid rgb(192, 114, 11);
}`

class Propos extends Component {
    render() {
      return (
          <Cadre id="propos"> 
              <Title>A Propos</Title>
              <Unline />
              <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.0990629257412!2d1.4042397154246653!3d47.42951167917326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fb5359cae9ba27%3A0xd598de831e3abcfc!2s19%20Rue%20du%20Vert%20Bois%2C%2041700%20Fresnes!5e0!3m2!1sfr!2sfr!4v1567242966761!5m2!1sfr!2sfr" 
              width="100%" 
              height="400" 
              frameborder="0" 
              style="border:0; margin-top:25px;" 
              allowfullscreen="" />
          </Cadre>

      )
    }
  }
  
  export default Propos