import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Kristina, a front-end developer living in Stockholm.</h2>
      <p>
        Need a developer? <Link to='/contact'>Contact me.</Link>
      </p>
    </div>
  )
}

export default IndexPage
