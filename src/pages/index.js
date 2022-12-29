import * as React from 'react'
import Layout from './layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from './seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Patagonia Magazine cover"
        src="https://image.isu.pub/180102172714-3b6b28d6d8894db8a2a588d72e273b54/jpg/page_1.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage