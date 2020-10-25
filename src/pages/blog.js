import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const blogItems = data.allContentfulBlogPost.edges.map(edge => (
    <li className={blogStyles.post} key={edge.node.title}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.publishedDate}</p>
      </Link>
    </li>
  ))

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>{blogItems}</ol>
    </Layout>
  )
}

export default BlogPage
