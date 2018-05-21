/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators

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
