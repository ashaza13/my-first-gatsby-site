import * as React from 'react'
import Layout from './layout'
import Seo from './layout'

const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
        </Layout>

    )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage