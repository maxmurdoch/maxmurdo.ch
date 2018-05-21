import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {ThemeProvider} from 'emotion-theming'

import theme from '../constants/theme'
import favicon from './favicon-32x32.png'
import './index.css'

const description =
  'Max Murdoch is an independent digital product designer and software engineer working in London.'
const title = 'Max Murdoch — Work'

const Layout = ({children}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <link rel="canonical" href="https://maxmurdo.ch" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="author" content="Max Murdoch" />
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <ThemeProvider theme={theme}>{children()}</ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
