import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import theme from '../constants/theme'
import PropTypes from 'prop-types'

import './index.css'

const Layout = ({children}) => {
  return <ThemeProvider theme={theme}>{children()}</ThemeProvider>
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allWorkJson {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`
