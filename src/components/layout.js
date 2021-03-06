import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "gatsby"
import "../styles/styles.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="wrapper">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
