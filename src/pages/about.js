import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        I am currently pursuing my Master of Science in Computer Science and
        Engineering / Interactive Media Technology at KTH Royal Institute of
        Technology, Stockholm.
      </p>
      <p>
        Want to work with me? <Link to='/contact'>Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
