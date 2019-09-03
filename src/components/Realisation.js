import React, { Component } from "react"
import styled from"@emotion/styled"

import rea1 from "../images/rea1.jpg"
import rea2 from "../images/rea2.jpg"
import rea3 from "../images/rea3.jpg"
import rea4 from "../images/rea4.jpg"

const Cadre = styled.div`{
  margin-top: 25px;
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

const Image = styled.img`{
  width: 25%;
  margin: 10px;
}`

class Realisation extends Component {
    render() {
      return (
        <Cadre id="realisation">
            <Title>Nos réalisation</Title>
            <Unline />
            <Image src={rea1} className="responsive" />
            <Image src={rea2} className="responsive" />
            <Image src={rea3} className="responsive" />
            <Image src={rea4} className="responsive" />
        </Cadre>
      )
    }
  }
  
  export default Realisation