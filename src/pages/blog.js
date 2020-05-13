import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Heading from "../components/Heading"

export default ({ data }) => {
    const posts = data.posts.edges
    const tags = data.tags.group
    return (
        <Layout>
          <Heading title='Blog Posts' svg='writing' />
          <div className='bg-yellow-100 text-navy px-10 pb-10 w-full md:max-w-6xl'>
          <h2>all posts</h2>
          <div className='flex'>
            <div className='flex flex-col w-3/5'>
              {posts.map(({ node }, index) => (
                <div className='pt-8 ' key={node.id}>
                <a className='blue-link text-xl' href={node.fields.slug}>{node.frontmatter.title}</a>
                <p className='py-4'>{node.excerpt}</p>
                <div className='flex justify-end'>
                {/* <div>tags: {node.frontmatter.tags}</div> */}
                <span className='text-right text-sm'><i>Reading Time: {node.timeToRead}mins</i></span>
                </div>
                </div>
                ))}
                
            </div>
            <div className='flex flex-col w-2/5'>
              <div className='ml-2 pl-4 border-solid border-navy border-4'>
                <h5 className='text-2xl font-bold text-left'>Tags:</h5>
                <ul className='py-2'>
                  {tags.map(element => (
                    <li className='font-bold'>{element.tag}: ({element.totalCount})</li>
                  ))}  
                </ul>
              </div>
            </div>
          </div>

          </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tags: {ne: "project"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
          }
          fields {
            slug
          }
          timeToRead
          fileAbsolutePath
          excerpt(pruneLength: 160)
        }
      }
    }
    tags: allMarkdownRemark(filter: {frontmatter: {tags: {ne: "project"}}}) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
