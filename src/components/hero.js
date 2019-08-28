import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ data }) => (
  <StaticQuery
    query={graphql`
            query {
                file(relativePath: { regex: "/crenfrow-hero-placeholder/" }) {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
    render={data => (
      <div>
        <div css={{
          width: '50%',
          height: 'auto',
          position: 'relative',
          overflow: 'hidden',
          display: 'block',
          margin: 'auto'
        }}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            css={{
              position: 'absolute'
            }}
          />
        </div>
      </div>
    )}
  />
)
