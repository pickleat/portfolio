import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
          <div>
            <h1>Blog Posts</h1>
            <h4>{data.allMarkdownRemark.totalCount}</h4>
              {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <div key={node.id}>
                <h3><a href={node.fields.slug}>{node.frontmatter.title}</a></h3>
                {/* {node.frontmatter.date} */}
                <p>{node.excerpt}</p>
                <p style={{ textAlign: 'right' }}><i>Reading Time: {node.timeToRead}mins</i></p>
                </div>
                ))}
          </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          timeToRead
          fileAbsolutePath
          excerpt
        }
      }
    }
    markdownRemark {
      id
    }
  }
`