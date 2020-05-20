import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import InnerLayout from "../components/innerLayout"
import Heading from "../components/H1HeadingAnd3Dots"
import H2Heading from "../components/H2Heading"
import BackButton from "../components/BackButton"

export default ({ data }) => {
    const posts = data.posts.edges
    const tags = data.tags.group
    return (
        <Layout>
          <Heading title='Blog Posts' svg='writing' />
          <InnerLayout>
            <H2Heading text="all posts" />
            <span className='sm:hidden'>
              <BackButton to='tags' text='All Tags'/>
            </span>
            <div className='flex'>
              <div className='flex flex-col w-full sm:w-3/5'>
                {posts.map(({ node }, index) => (
                  <div className='pt-8 ' key={node.id}>
                    <Link className='blue-link text-xl' to={node.fields.slug}>{node.frontmatter.title}</Link>
                    <p className='py-4'>{node.excerpt}</p>
                    <div className='flex justify-end'>
                    {/* <div>tags: {node.frontmatter.tags}</div> */}
                      <span className='text-right text-sm'><i>Reading Time: {node.timeToRead}mins</i></span>
                    </div>
                  </div>
                  ))}
                  
              </div>
              
              <div className='hidden sm:flex sm:flex-col sm:w-2/5'>
                <div className='ml-2 pl-4 border-solid border-navy border-4'>
                  <h5 className='pt-2 text-2xl font-bold text-left'>
                    <Link className='hover:underline' to='/tags/'>Tags:</Link>
                  </h5>
                  <ul className='py-2'>
                    {tags.map(element => (
                      <li key={`${element.tag}+tag`} className='font-bold'>
                        <Link className={`blue-link`} to={`/tags/${element.tag}`}>
                          {element.tag}: ({element.totalCount})
                        </Link>
                      </li>
                    ))}  
                  </ul>
                </div>
              </div>
            </div>
          </InnerLayout>
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
