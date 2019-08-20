import React from "react"
import { Link } from "gatsby"

import Twitter from "../images/twitter.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"

const Footer = () => (
  <footer>
    <div className="contact">
      <p>
      19 Bis Rue du Vert Bois
        <br />
        Fresnes, Centre, France <br /> <b>06 50 56 84 67</b>
      </p>
      <Link to="/contact/" className="btncontact">
        Contact
      </Link>
    </div>
    <ul className="reseaux">
      <li>
        <a>
          <img src={Twitter} className="logoreseaux" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/%C3%89B%C3%89NISTART-482883275446690/?__tn__=kC-R&eid=ARBS-MMOVH0mpnKtTzaAHYpuA7lOmfgMkcqcBzLXX2cacsnuvXJ_Pp1uXKWFbEOqqGJYVMysLYtT_PxC&hc_ref=ART1BvBUQdlIMnUS-I0rjjTom78gLBdRIfmXdRMM_-047nGH0SY8gNG-QYzcCiwGMR0&fref=nf&__xts__[0]=68.ARCOXEgfct4rWe1b0myz1EFXGWhFfuBG6fQBTWaF3_PNvu75P5QE7-zHhiFRG00j4iYcVpIjNhWkC3w6VEtXAmRMJRNlAIIHFglF0QPUpjb6EOJWCoF9CLVwTdxj0FL2hWbNJyBpcw6rF2AHc6EEM6MTK3mh6ryNpGc8Q9lyXQj40AJbeJn-ZfwRKgLqO7p4CRR_A_ZsC-NsvaFuuMbX0SzaLZnl4XREv01qcP4xAN6R6npztcaypWyzl7HIYrLsH5Egh5pZXb5eboEvAhY315CNWUmTCCC7oEafMsK4U23DrOI5jXq_Fd0VZwNssxUV4Yyny4LG4aBdpFuWRd8kh-Vo0c8_7KUTjVSWg5gtgFm4tiHjKL175A">
          <img src={Facebook} className="logoreseaux" />
        </a>
      </li>
      <li>
        <a>
          <img src={Instagram} className="logoreseaux" />
        </a>
      </li>
    </ul>
    <div className="copyright">
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.gatsbyjs.org">Webizy-France</a>
    </div>
  </footer>
)

export default Footer
