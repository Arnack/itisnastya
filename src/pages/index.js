import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from 'components/layout'
import Spinner from 'components/spinner'
import Hero from 'sections/hero'
import About from 'sections/about'
import Portfolio from 'sections/portfolio'
import Services from 'sections/services'
import Testimonials from 'sections/testimonials'
import Contact from 'sections/contact'
import { Toaster } from 'react-hot-toast'
import Vacansies from '../sections/vacansies'

class HomePage extends React.Component {

  render() {
    const { site } = this.props.data
    const { siteTitle, description } = this.props.data?.contentfulMetadata
    return (
      <div>
        <Helmet>
          <title>{siteTitle || site.meta.title}</title>
          <meta name="description" content={description || site.meta.description} />
        </Helmet>
        <Layout>
            <Hero id="home" />
            <About id="about" />
            <Services id="services" />
            <Vacansies id="vacancies" />
            <Portfolio id="portfolio" />
            <Testimonials id="testimonials" />
            <Contact id="contact" />
            
        <Toaster />
        </Layout>
        <Spinner duration={1000} />
      </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
    contentfulMetadata {
      siteTitle
      description
    }
  }
`
