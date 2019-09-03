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
import Services from "../components/Services"
import Propos from "../components/Propos"
import Contact from"../components/Contact"
import Realisation from "../components/Realisation"

library.add(faBars, faTimes, faCalendar)

const Parallax = styled.div`{
  background-image: url("http://blog.usine-online.com/wp-content/uploads/2015/12/accueil_03.jpg");
  min-height: 600px;

  position:relative;
  opacity: 0.7;
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  }`


const Cadre = styled.div`{
  width: 100%;
  height:600px;
  }`

const Text = styled.span`{
    display: inline-block;
    background: rgb(192, 114, 11);
    font-size: 27px;
    text-transform: uppercase;
    margin: 5px auto;
    text-align: center;
    color: #111;
    font-family: "Abril Fatface";
  }`

class BlogIndex extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <SEO title="Ebenist art" />
          <Parallax>
            <Cadre>
              <Text>Ebeniste plus qu'un simple métier...</Text> 
            </Cadre>
          </Parallax>
          <Services />
          <Realisation  />
          <Propos  />
          <Contact />
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
