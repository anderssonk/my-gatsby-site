const path = require('path')
// Loads the built-in (node core) path module

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    // console.log(JSON.stringify(node, undefined, 4))
    const slug = path.basename(node.fileAbsolutePath, '.md') // 2nd arg removes extention

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  // Get absolute path to template

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `) // res (response) awaits the promise from graphql()
  // Get markdown data

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  }) // Create new page
}
