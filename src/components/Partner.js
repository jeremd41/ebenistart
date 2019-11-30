import React, {Component} from "react"
import styled from "styled-components"

import agefip from "../images/agefip.jpg"
import tih from "../images/tih.jpg"
import commode from "../images/commode.jpg"

const Cadre = styled.div`
   {
    margin-top: 25px;
    width: 100%;
    height:auto;
    margin-bottom: 50px;

    img{
        margin: 5px;
        max-width: 20%;
        max-height: 10%;
        margin-left: auto;
        margin-right: auto;
        
        @media screen and (max-width: 762px) {
            margin: 5px;
            max-width: 30%;
            max-height: 10%;
            margin-left: auto;
            margin-right: auto;
          }
    }

    .wrapFlex{
        display:flex;
        justify-content: space-around;

        @media screen and (max-width: 762px) {
            flex-direction: column;
          }
    }
  }
`

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

class Partner extends Component{
render(){
    return(
        <Cadre>
            <Title>Partenaires</Title>
            <Unline />
            <div className="wrapFlex">
                <img src={agefip} alt="agefip"/>
                <img src={tih} alt="Tih business"/>
                <img src={commode} alt="commode s'en mêle"/>
            </div>
        </Cadre>
    )
}
}

export default Partner