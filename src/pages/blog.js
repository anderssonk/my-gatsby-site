import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  const blogItems = data.allMarkdownRemark.edges.map(edge => (
    <li>
      <h1>{edge.node.frontmatter.title}</h1>
      <p>{edge.node.frontmatter.date}</p>
    </li>
  ))

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>{blogItems}</ol>
    </Layout>
  )
}

export default BlogPage
