import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Resume from '../components/resume'

export default ({ data }) => (
  <Layout pageTitle="Home">
    <Hero />
    <Resume />
  </Layout>
)
