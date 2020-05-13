import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Heading from "../components/Heading"

export default ({ data }) => {
    const blogStyle = {
        H1: 'p-2 font-bold text-xl',
        H2: 'p-2 font-bold text-lg',
        H3: 'p-2 font-bold text-md',
        A: ' blue-link',
        P: 'pt-4',
        BLOCKQUOTE: 'ml-4 pl-4 border-solid border-navy border-l-4',
        PRE: 'bg-gray-800 font-mono text-yellow-100 p-4 break-words',
        CODE: 'bg-gray-800 font-mono text-yellow-100 px-2 py-1 break-words',
        OL: 'list-decimal list-inside',
        UL: 'list-disc list-inside',
        LI: 'pl-2',
        HR: 'my-4 border-solid border-navy border-2'
      }

    useEffect( () => {
        // formats the Markdown
        function styleChildren(children) {
            children.forEach((child) => {
                let tagIt = child.tagName
                child.classList = blogStyle[tagIt]
                if(child.children) {
                    let grandChildren = [...child.children]
                    styleChildren(grandChildren)
                }
            })
          }

        let post = document.getElementById('post-data')
        let postChildren = [...post.children]
        styleChildren(postChildren)
    })


    const post = data.markdownRemark
    const tags = post.frontmatter.tags

    return (
        <Layout>
            {tags.includes('project') 
                ? <Heading title='Project' svg='project' />
                : <Heading title='Blog Post' svg='writing'/>
            }
            <div className='flex-column bg-yellow-100 text-navy px-10 pb-10 w-full md:max-w-6xl'>
                <h2>{post.frontmatter.title}</h2>
                <div className='flex justify-end items-center' >
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-current h-4 w-4' viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>
                    <span className='pl-2 text-right'>Posted: {post.frontmatter.date}</span>
                </div>
                <div id='post-data' className='pt-4' dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tags
            }
        }
    }    
`