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
          <a className="btn-reserver-mobile" to="index.html#contact">
            Contact
          </a>
          <ul className="menu">
            <Link className="logo" to="/">
              Ebenist'Art
            </Link>
            <li>
              <a href="index.html#services">Services</a>
            </li>
            <li>
              <a href="index.html#espoir">Espoir</a>
            </li>
            <li>
<<<<<<< HEAD
                <a href="index.html#espoir">Espoir</a>
            </li>
            <li>
                <a href="index.html#propos">A propos</a>
||||||| merged common ancestors
                <a href="index.html#propos">A propos</a>
=======
              <a href="index.html#realisation">Réalisation</a>
>>>>>>> 5cadfedfd93a10acac8fb9cc8fd1e827d7f7b477
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
