const path = require('path')
// Loads the built-in (node core) path module

// !!!! REMOVED WHEN SWITCHED TO CONTENTFUL
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === 'MarkdownRemark') {
//     // console.log(JSON.stringify(node, undefined, 4))
//     const slug = path.basename(node.fileAbsolutePath, '.md') // 2nd arg removes extention

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  // Get absolute path to template

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `) // res (response) awaits the promise from graphql()
  // Get markdown data

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  }) // Create new page
}
