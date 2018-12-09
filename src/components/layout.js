import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { rhythm } from "../utils/typography"

const ListLink = props => (
    <li css={{ 
        marginRight: `1rem`,
        marginBottom: rhythm(1),
        display: "inline-block",
        fontStyle: "normal"
    }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
)

export default ({ pageTitle, children }) => (
    <StaticQuery
        query={graphql`
            query {
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
                        margin: "0 auto",
                        maxWidth: "800px",
                        padding: rhythm(1),
                    }}
                >
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{data.site.siteMetadata.title}{(pageTitle !== undefined) ? ` - ${pageTitle}` : ``}</title>
                        <link rel="canonical" href={`http://chrisrenfrow.me/${(pageTitle !== undefined) ? `${pageTitle}/` : ``}`}/>
                    </Helmet>
                    <div css={{ overflow: "hidden" }}>
                        <ul
                            css={{
                                float: "right",
                                display: "inline-block",
                                margin: `${rhythm(1)} auto`,
                            }}
                        >
                            <ListLink to="/about/">About</ListLink>
                            <ListLink to="/blog/">Blog</ListLink>
                            <ListLink to="/projects/">Projects</ListLink>
                        </ul>
                        <Link to="/">
                            <h2
                                css={{
                                    margin: `${rhythm(1)} auto`,
                                    display: "inline-block",
                                    fontStyle: "normal"
                                }}
                            >
                                {data.site.siteMetadata.title}{(pageTitle !== undefined) ? ` - ${pageTitle}` : ``}
                            </h2> 
                        </Link>
                    </div>
                    <hr />
                    {children}
                </div>
            )
        }
    />
)