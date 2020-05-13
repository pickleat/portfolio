import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Heading from "../components/heading"

export default ({ data }) => {
    const projects = data.projects.edges
    const tags = data.tags.group
    return (
        <Layout>
            <Heading title='Projects' svg='project'/>
            <div className='bg-yellow-100 text-navy px-10 pb-10 w-full md:max-w-6xl'>
                <h2>A selection of projects...</h2>
                <div className='flex'>
                    <div className='flex flex-col w-3/5'>
                    {projects.map(({ node }, index) => (
                        <div className='pt-8 ' key={node.id}>
                            <a className='blue-link text-xl' href={node.fields.slug}>{node.frontmatter.title}</a>
                            <p className='py-4'>{node.excerpt}</p>
                            <div className='flex justify-end'>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className='flex flex-col w-2/5'>
                        <div className='ml-2 pl-4 border-solid border-navy border-4'>
                            <h5 className='text-2xl font-bold text-left'>Tags:</h5>
                            <ul className='py-2'>
                            {tags.map(element => (
                                <li key={element.tag} className='font-bold'>{element.tag}: ({element.totalCount})</li>
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
    query projects {
        projects: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "project"}}}, sort: {fields: frontmatter___title, order: ASC}) {
            edges {
                node {
                id
                frontmatter {
                    date
                    title
                    tags
                }
                fields {
                    slug
                }
                fileAbsolutePath
                excerpt(pruneLength: 160)
                }
            }
        }
        tags: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "project"}}}) {
            group(field: frontmatter___tags) {
              tag: fieldValue
              totalCount
            }
          }
    }
`