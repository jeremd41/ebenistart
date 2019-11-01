import React from "react"
import { Component } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import "../styles/styles.css"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services"
import Propos from "../components/Propos"
import Contact from"../components/Contact"
import Realisation from "../components/Realisation"
import Espoir from "../components/Espoir"

import imgindex from "../images/index.jpg"

library.add(faBars, faTimes, faCalendar)

const Parallax = styled.div`{
  background-image: url(${imgindex});
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
    width: 50%;
    background: rgb(192, 114, 11);
    font-size: 32px;
    text-transform: uppercase;
    margin: 11% 25%;
    text-align: center;
    color: #111;
    font-family: "Abril Fatface";

    @media screen and (max-width: 762px) {
      width: 95%;
      margin: 25% 3%;
  }
  }`

  const Text2 = styled.span`{
    display: inline-block;
    width: 230px;
    background: rgb(192, 114, 11);
    font-size: 32px;
    text-transform: uppercase;
    margin: 1% 40%;
    text-align: center;
    color: #111;
    font-family: "Abril Fatface";

    @media screen and (max-width: 762px) {
      margin: 10% 25%;
  }
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
              <Bounce left>
              <Text>Ebeniste plus qu'un simple métier...</Text>
              </Bounce>
              <Bounce right>
              <Text2>C'est un ART</Text2>
              </Bounce>
            </Cadre>
          </Parallax>
          <Services />
          <Espoir />
          <Realisation />
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
