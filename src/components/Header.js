import { Link } from "gatsby"
import React, { Component } from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../images/logo.jpg"

const Image = styled.img`{
 width: 105px;
 margin-bottom: 5px;
 height:auto;

 @media screen and (max-width: 762px) {
  position: absolute;
  top: 2%;
  right: 3%
}
  
}`

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <input type="checkbox" id="chk" />
          <label for="chk" className="show-menu-btn">
            <FontAwesomeIcon className="icon" icon="bars" />
            <Link to="/"><Image src={logo} /></Link>
          </label>
          <Link to="index.html#contact">
          <a className="btn-reserver-mobile" to="index.html#contact">
            Contact
          </a>
          </Link>
          <ul className="menu">
            <Link className="logo" to="/">
              <Image src={logo} />
            </Link>
            <li>
              <a href="index.html#services">Services</a>
            </li>
            <li>
              <a href="index.html#realisation">Realisation</a>
            </li>
            <li>
              <a href="index.html#espoir">Espoir</a>
            </li>
            <li>
              <a href="index.html#propos">A propos</a>
            </li>
            <li>
              <a href="index.html#contact">Contact</a>
            </li>
            <label for="chk" className="hide-menu-btn">
              <FontAwesomeIcon icon="times" />
            </label>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
