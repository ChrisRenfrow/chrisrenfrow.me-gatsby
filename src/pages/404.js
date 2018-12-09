import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default ({ data }) => (
    <Layout>
        <h3>Whoops!</h3>
        <p>Looks like the page you're looking for doesn't exist yet.</p>
        <p><Link to="/">Go Home</Link></p>
    </Layout>
)