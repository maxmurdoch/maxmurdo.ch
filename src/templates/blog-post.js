import React from 'react'
import untitled from '../fonts/untitled/Untitled-Sans-Light.woff'
import {injectGlobal} from 'emotion'

injectGlobal`
@font-face {
    font-family: 'Untitled';
    font-style: normal;
    font-weight: 300;
    src: url(${untitled}) format('woff');
  }
  * {
    font-family: 'Untitled';
  }
`
const BlogPost = ({data}) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1 style={{fontFamily: 'Untitled'}}>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
