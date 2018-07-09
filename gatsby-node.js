const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode, basePath: 'pages'})
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  } else if (node.internal.type === 'WorkJson') {
    const slug = createFilePath({node, getNode, basePath: 'data/work'})
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}
