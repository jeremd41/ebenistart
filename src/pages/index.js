import React from "react"
import { Component } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import "../styles/styles.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"


library.add(faBars, faTimes, faCalendar)

const Parallax = styled.div`
  background-image: url("https://www.mon-ebeniste.com/MEB/ebeniste/prix-ebeniste.jpg");
  min-height: 295px;

  position:relative;
  opacity: 0.40;
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  }`

class BlogIndex extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <SEO title="Ebenist art" />
          <Parallax  />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
