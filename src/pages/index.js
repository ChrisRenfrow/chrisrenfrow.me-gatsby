import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Resume from "../components/resume"

export default ({ data }) => (
    <Layout pageTitle="Home">
        <Hero />
        <Resume />
    </Layout>
)
