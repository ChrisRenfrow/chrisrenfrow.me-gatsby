import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Resume from "../components/resume"
import Layout from "../components/layout"

export default ({ data }) => (
    <Layout pageTitle="Home">
        <div>
            Some sort of hero content here
        </div>
        <Resume />
    </Layout>
)
