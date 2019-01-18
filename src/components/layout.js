import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { rhythm } from '../utils/typography'

import Header from './header'

const Layout = ({ pageTitle, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }`
    }
    render={ data => (
      <div
        css={{
          margin: '0 auto',
          maxWidth: '800px',
          padding: rhythm(1),
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}{(pageTitle !== undefined)
            ? ` - ${ pageTitle }` : ``}
          </title>
          <link rel="canonical" href={`http://chrisrenfrow.me/${
            (pageTitle !== undefined) ? `${ pageTitle }/` : ``
          }`}/>
        </Helmet>
        <Header props={{
          siteTitle: data.site.siteMetadata.title,
          pageTitle: pageTitle
        }}/>
        <div>
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
