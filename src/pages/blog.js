import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout pageTitle="Blog">
    <p>Home to my personal blog.</p>
    <p>Coming soon!</p>
    <p><Link to="/">Go Home</Link></p>
  </Layout>
)
