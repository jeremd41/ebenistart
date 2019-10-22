import React, { Component } from "react"
import styled from "styled-components"

const Cadre = styled.div`
   {
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #393b37;
    width: 100%;
    height: auto;
  }
`

const Title = styled.h1`
   {
    text-align: center;
    text-transform: uppercase;
  }
`

class Espoir extends Component {
  render() {
    return (
      <Cadre id="espoir">
        <Title>De l'espoir à l'autonomie</Title>
      </Cadre>
    )
  }
}

export default Espoir
