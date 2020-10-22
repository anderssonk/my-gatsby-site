import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Kristina, a front-end developer living in Stockholm.</h2>
      <p>
        Need a developer? <Link to='/contact'>Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
