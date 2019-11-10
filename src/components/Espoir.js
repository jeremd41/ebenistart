import React, { Component } from "react"
import styled from"@emotion/styled"

const Cadre = styled.div`{
    margin-top: 25px;
    width: 100%;
    height:auto;
    background-color: #393B37;
    padding-top: 25px;
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

const Wrapper = styled.div`{
    width: 95%;
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    margin: 0 auto;

    @media screen and (max-width: 762px) {
        flex-direction: column;
        margin: 0 16px;
    }
}`

const Texte = styled.div`{
    width: 90%;
    padding: 15px;
    height: 400px;
    background: #111;
    color: #fff;
    margin-right: 15px;

    @media screen and (max-width: 762px) {
        margin-bottom: 10px;
        }
}`

const Texte2 = styled.div`{
  width: 90%;
  padding: 190px 90px;
  background: rgb(192, 114, 11);
  color: #fff;
  margin-right: 15px;
  text-align:center;
  font-weight: bold;
  font-size: 19px;

  @media screen and (max-width: 762px) {
      margin-bottom: 10px;
      padding: 15px;
      }
}`

class Espoir extends Component {
    render() {
      return (
          <Cadre id="espoir"> 
              <Title>Autre service: De l'espoir à l'autonomie</Title>
              <Unline />
              <Wrapper>
              <Texte>Service dédié aux personnes à mobilité réduite. Ce service proposé consiste à récolter des financements pour pouvoir fabriquer et offrir du mobilier adapté à des personnes en situation de handicap afin de faciliter leurs gestes du quotidien.
            </Texte>
            <Texte2>Ici prochainement une vidéo de présentation ...</Texte2>
              </Wrapper>
          </Cadre>

      )
    }
  }
  
  export default Espoir