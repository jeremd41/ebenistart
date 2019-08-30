import { Link } from "gatsby"
import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <input type="checkbox" id="chk" />
          <label for="chk" className="show-menu-btn">
            <FontAwesomeIcon className="icon" icon="bars" />
            <Link to="/">Ebenist'Art</Link>
          </label>
          <Link className="btn-reserver-mobile" to="/">
            Contact
          </Link>
          <ul className="menu">
            <Link className="logo" to="/">
            Ebenist'Art
            </Link>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Réalisation</a>
            </li>
            <li>
                <a href="#">A propos</a>
            </li>
            <li>
                <a href="#">Contact</a>
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