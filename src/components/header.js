import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const ListLink = props => (
  <li css={{
    marginRight: `1rem`,
    marginBottom: rhythm(1),
    display: 'inline-block',
    fontStyle: 'normal'
  }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default ({ props }) => (
  <header css={{ overflow: 'hidden' }}>
    <ul
      css={{
        float: 'right',
        display: 'inline-block',
        margin: `${ rhythm(1) } auto`,
      }}
    >
      <ListLink to="/">Home</ListLink>
      {/* <ListLink to="/about/">About</ListLink> */}
      {/* <ListLink to="/blog/">Blog</ListLink> */}
      {/* <ListLink to="/projects/">Projects</ListLink> */}
    </ul>
    <Link to="/">
      <h2
        css={{
          margin: `${ rhythm(1) } auto`,
          display: 'inline-block',
          fontStyle: 'normal'
        }}
      >
        {props.siteTitle}{
          (props.pageTitle !== undefined) ? ` - ${ props.pageTitle }` : ``
        }
      </h2>
    </Link>
    <hr />
  </header>
)
