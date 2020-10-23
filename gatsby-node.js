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
