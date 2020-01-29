import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h3>Uh-oh...</h3>
    <p>Looks like the page you're looking for doesn't exist yet.</p>
    <p><Link to="/">Go Home</Link></p>
  </Layout>
)
