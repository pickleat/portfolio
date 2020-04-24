import React from 'react'

import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
          <div>
            <h1>No Page Here</h1>
            <p>The page you are looking for, can't be found, sorry.</p>
          </div>
        </Layout>
    )
}

