import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title='Home' />
      <h1>Hello</h1>
      <h2>I'm Kristina, a front-end developer living in Stockholm.</h2>
      <p>
        Need a developer?{' '}
        <Link to='/contact' className='btn primary'>
          Contact me
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
