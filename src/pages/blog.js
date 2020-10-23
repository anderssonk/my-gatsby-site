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

  const posts = data.allMarkdownRemark.edges
  const listItems = posts.map(post => (
    <li key={post.node.frontmatter.title}>
      <h1>{post.node.frontmatter.title}</h1>
      <p>{post.node.frontmatter.date}</p>
    </li>
  ))

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>{listItems}</ol>
    </Layout>
  )
}

export default BlogPage
