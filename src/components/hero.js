import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

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
                width: "100%", 
                height: "auto", 
                position: "relative",
                overflow: "hidden"
            }}>
                <Img 
                    fluid={data.file.childImageSharp.fluid} 
                    css={{
                        position: "absolute"
                    }}
                />
            </div>
        </div>
        )}
    />
)