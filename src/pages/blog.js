import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default ({ data }) => (
    <Layout pageTitle="Blog">
        <p>Home to my personal blog.</p>
        <p>Coming soon!</p>
        <p><Link to="/">Go Home</Link></p>
    </Layout>
)
