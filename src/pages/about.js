import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About me</h1>
      <p>
        I am currently pursuing my Master of Science in Computer Science and
        Engineering / Interactive Media Technology at KTH Royal Institute of
        Technology, Stockholm.
      </p>
      <p>
        Want to work with me? <Link to='/contact'>Reach out.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
