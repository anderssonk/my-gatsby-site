import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
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
