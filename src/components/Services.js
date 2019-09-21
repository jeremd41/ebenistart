import React, { Component } from "react"
import styled from "@emotion/styled"
import Iframe from 'react-iframe'
import Fade from "react-reveal/Fade"

import conception from "../images/conception.png"

const Cadre = styled.div`{
    padding-top: 25px;
    background-color: #393B37;
    width: 100%;
    height:700px;

    @media screen and (max-width: 762px) {
        height: 1100px;
    }

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

const List = styled.ul`{
    margin: 50px;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(192, 114, 11);

    @media screen and (max-width: 762px) {
        flex-direction: column;
    }

}`

const ObjList = styled.li`{
    width:100%;
    margin: 10px;
    padding: 2px;
    margin-bottom: 35px;
    border: 1px solid #111;
}`

const NameList = styled.h2`{
    text-align: center;
   
}`

const Description = styled.p`{
    text-align: center;
    font-size: 22px;
    margin: 15px;
    height: 100px;
}`

class Services extends Component {
    render() {
      return (
        <Cadre id="services">
            <Title>Services</Title>
            <Unline />
            <List>

                <ObjList>
                    <Fade left>
                    <NameList>Conception</NameList>
                    <Description> Demande de mobilier spécifique avec une fonction particulière </Description>
                    </Fade>
                </ObjList>
                
                <ObjList>
                    <Fade left>
                    <NameList>Sur-mesure</NameList>
                    <Description>Fabrication de meubles sur mesure:  chambre salle de bain salle à manger salon ou encore du mobilier de jardin. </Description>
                    </Fade>
                </ObjList>
                
                <ObjList>
                    <Fade left>
                    <NameList>Restauration</NameList>
                    <Description>Restauration de mobilier ancien et contemporain</Description>
                    </Fade>
                </ObjList>

            </List>
            <Iframe 
            width="100%" 
            className="video"
            src="https://www.youtube.com/embed/Bcsc1i8B3fw?controls=0" 
            frameborder="0" 
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />   
        </Cadre>
      )
    }
  }

export default Services