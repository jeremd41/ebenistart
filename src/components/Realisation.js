import React, { Component } from "react"

import rea1 from "../images/rea1.jpg"
import rea2 from "../images/rea2.jpg"
import rea3 from "../images/rea3.jpg"
import rea4 from "../images/rea4.jpg"

class Realisation extends Component {
    render() {
      return (
        <div>
            <h2>Nos réalisation</h2>
            <img src={rea1} className="responsive" />
            <img src={rea2} className="responsive" />
            <img src={rea3} className="responsive" />
            <img src={rea4} className="responsive" />
        </div>
      )
    }
  }
  
  export default Realisation