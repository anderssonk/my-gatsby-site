import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact' />
      <h1>Contact</h1>
      <p>
        The best way to reach me is by contacting me on{' '}
        <a
          href='https://www.linkedin.com/in/kristina-andersson/'
          className='btn secondary'
        >
          LinkedIn
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage