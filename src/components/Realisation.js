import React, { Component } from "react"
import styled, { css } from "styled-components"

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

import rea1 from "../images/rea1.jpg"
import rea2 from "../images/rea2.jpg"
import rea3 from "../images/rea3.jpg"
import rea4 from "../images/rea4.jpg"
import rea5 from "../images/rea5.jpg"
import rea6 from "../images/rea6.jpg"

const Cadre = styled.div`{
  padding-top: 25px;
  margin-top: 25px;
  width: 100%;
  height:auto;
  padding-bottom: 25px;
  background-color: #393B37;

  @media screen and (max-width: 762px) {
    height: 600px;
  }

  }`

const Title = styled.h1`{
  margin-top: 25px;
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
  width:80%;
  margin: 1px auto;
  text-align:center;

}`

const Image = styled.img`{
  max-width: 100%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (max-width: 762px) {
    width: 100%;
    height: auto;
}

}`

const width = '90%', height='500px';

const Container = styled.div`
  margin: 3px auto;
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
`;

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}

  @media screen and (max-width: 762px) {
    line-height: 250px;
    }
`;


const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

class Realisation extends Component {
    render() {
      return (
        <Cadre id="realisation">
            <Title>Nos réalisation</Title>
            <Unline />
            <Carousel defaultWait={3000} /*wait for 3000 milliseconds*/ >
              <Slide right>
                <Wrapper>
                  <Image src={rea1} alt="realisation" />
                </Wrapper>
              </Slide>
              <Slide right>
                <Wrapper>
                  <Image src={rea2} alt="realisation" />
                </Wrapper>
              </Slide>
              <Slide right>
                <Wrapper>
                  <Image src={rea3} alt="realisation" />
                </Wrapper>
              </Slide>
              <Slide right>
                <Wrapper>
                  <Image src={rea4} alt="realisation" />
                </Wrapper>
              </Slide>
              <Slide right>
                <Wrapper>
                  <Image src={rea5} alt="realisation" />
                </Wrapper>
              </Slide><Slide right>
                <Wrapper>
                  <Image src={rea6} alt="realisation" />
                </Wrapper>
              </Slide>
          </Carousel>
        </Cadre>
      )
    }
  }
  
  export default Realisation