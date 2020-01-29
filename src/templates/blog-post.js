import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title="Blog">
        <article>
          <header>
            <h1 style={{}} >
              {post.frontmatter.title}
            </h1>
            <small>{post.frontmatter.date}</small>
            <p style={{}} >
              {post.frontmatter.data}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={{}} />
          <footer>
            {/* Bio or something here */}
          </footer>
        </article>
        <nav>
          <ul style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }} >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  {'< ' + previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title + ' >'}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                description
            }
        }
    }
`