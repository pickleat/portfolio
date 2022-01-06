import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import InnerLayout from "../components/innerLayout"
import Heading from "../components/H1HeadingAnd3Dots"
import H2Heading from "../components/H2Heading"
import BackButton from "../components/BackButton"

const BlogPost = ({ data }) => {
    const blogStyle = {
        H1: 'py-2 font-bold text-2xl',
        H2: 'py-2 font-bold text-xl',
        H3: 'py-2 font-bold text-lg',
        H4: 'py-2 font-bold text-md',
        H5: 'py-2 font-bold text-md',
        H6: 'py-2 font-bold text-md',
        A: 'blue-link',
        P: 'py-4',
        BLOCKQUOTE: 'ml-4 pl-4 border-solid border-navy border-l-4',
        PRE: 'bg-navy font-mono text-yellow-100 p-4',
        OL: 'list-decimal list-inside',
        UL: 'list-disc list-inside',
        LI: 'pl-2',
        HR: 'my-4 border-solid border-navy border-2'
      }
    const longCode = {
        CODE: 'flex overflow-x-auto bg-navy font-mono text-yellow-100 px-1 py-1 text-xs',
    }
    const shortCode = {
        CODE: 'bg-navy font-mono text-yellow-100 px-1 py-1 text-xs'
    }

    useEffect( () => {
        // formats the Markdown
        function styleChildren(children) {
            children.forEach((child) => {
                let tagIt = child.tagName
                child.classList = blogStyle[tagIt]
                if(tagIt === 'CODE' && child.innerText.length > 15){child.classList = longCode[tagIt]}
                if(tagIt === 'CODE' && child.innerText.length <= 15){child.classList = shortCode[tagIt]}
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
    const backButtonData = {
        text: tags.includes('project') ? 'Projects' : 'Posts', 
        to: tags.includes('project') ? 'projects' : 'blog'
    }

    return (
        <Layout>
            {tags.includes('project') 
                ? <Heading title='Project' svg='project' />
                : <Heading title='Blog Post' svg='writing'/>
            }
            <InnerLayout>
                <H2Heading text={post.frontmatter.title} />
                <div className='flex flex-col sm:flex-row justify-between'>
                <span className='max-w-lg'>
                    <BackButton to={backButtonData.to} text={`Back to all ${backButtonData.text}`} />
                </span>
                <div className='flex flex-col mt-4 w-full sm:w-2/5'>
                    <div className='sm:ml-2 py-2 pl-4 border-solid border-navy border-4'>
                        <h5 className='text-2xl font-bold text-left'>Post Info:</h5>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-current h-4 w-4' viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>
                            <span className='pl-2 text-right'>{post.frontmatter.date}</span>
                        </div>
                        {post.frontmatter.devto ? 
                            <div className='flex items-center'>
                                <svg className='h-4 w-4' viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0656 20.7476C11.6759 20.4588 11.2852 20.3143 10.8954 20.3143H9.14364V30.7205H10.8964C11.2862 30.7205 11.6769 30.5761 12.0666 30.2872C12.4564 29.9984 12.6512 29.5651 12.6512 28.9863V22.0485C12.6502 21.4708 12.4544 21.0365 12.0656 20.7476ZM40.5904 3.1875H4.4096C1.97879 3.1875 0.00602679 5.13885 0 7.55039V43.4496C0.00602679 45.8612 1.97879 47.8125 4.4096 47.8125H40.5904C43.0222 47.8125 44.994 45.8612 45 43.4496V7.55039C44.994 5.13885 43.0212 3.1875 40.5904 3.1875ZM15.4888 29.0053C15.4888 30.8789 14.3227 33.7178 10.6312 33.7118H5.97054V17.2304H10.7297C14.2895 17.2304 15.4868 20.0653 15.4878 21.94L15.4888 29.0053ZM25.6018 20.1739H20.25V24.0009H23.5215V26.9463H20.25V30.7723H25.6028V33.7178H19.357C18.236 33.7467 17.3039 32.8681 17.2758 31.7565V19.2943C17.2487 18.1837 18.1356 17.2613 19.2556 17.2334H25.6028L25.6018 20.1739ZM36.0121 31.6579C34.6862 34.7208 32.3106 34.1112 31.2469 31.6579L27.3767 17.2344H30.6482L33.6325 28.562L36.6027 17.2344H39.8752L36.0121 31.6579Z" fill="black"/></svg>
                                <a href={post.frontmatter.devto} className='pl-2 text-right blue-link'>Dev.to</a>
                            </div>
                            : null
                        }
                        {post.frontmatter.website ? 
                            <div className='flex items-center'>
                                <svg className='fill-current h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg>
                                <a href={post.frontmatter.website} className='pl-2 text-right blue-link'>Website</a>
                            </div>
                            : null
                        }
                        {post.frontmatter.github ?
                            <div className='flex items-center'>
                                <svg className="fill-current h-4 w-4" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0.494995C8.95 0.494995 0 9.44999 0 20.495C0 29.3333 5.73 36.8283 13.675 39.47C14.675 39.6583 15.0417 39.04 15.0417 38.5083C15.0417 38.0333 15.025 36.775 15.0167 35.1083C9.45333 36.315 8.28 32.425 8.28 32.425C7.37 30.1167 6.055 29.5 6.055 29.5C4.24333 28.26 6.195 28.285 6.195 28.285C8.20333 28.425 9.25833 30.345 9.25833 30.345C11.0417 33.4033 13.94 32.52 15.0833 32.0083C15.2633 30.715 15.7783 29.8333 16.35 29.3333C11.9083 28.8333 7.24 27.1133 7.24 19.45C7.24 17.2667 8.015 15.4833 9.29833 14.0833C9.07333 13.5783 8.39833 11.545 9.47333 8.79C9.47333 8.79 11.1483 8.25333 14.9733 10.84C16.5733 10.395 18.2733 10.175 19.9733 10.165C21.6733 10.175 23.3733 10.395 24.9733 10.84C28.7733 8.25333 30.4483 8.79 30.4483 8.79C31.5233 11.545 30.8483 13.5783 30.6483 14.0833C31.9233 15.4833 32.6983 17.2667 32.6983 19.45C32.6983 27.1333 28.0233 28.825 23.5733 29.3167C24.2733 29.9167 24.9233 31.1433 24.9233 33.0167C24.9233 35.6933 24.8983 37.8433 24.8983 38.4933C24.8983 39.0183 25.2483 39.6433 26.2733 39.4433C34.275 36.82 40 29.32 40 20.495C40 9.44999 31.045 0.494995 20 0.494995Z"/></svg>
                                <a href={post.frontmatter.github} className='pl-2 text-right blue-link'>Github</a>
                            </div>
                            : null
                        }
                        <div className='flex flex-wrap'>Tags:&nbsp;{post.frontmatter.tags.map((tag) => (
                                <Link key={`${tag}+tag`} className='blue-link' to={`/tags/${tag}`}>{tag},&nbsp;</Link>)
                            )}
                        </div>
                    </div>
                </div>
                </div>
                <div id='post-data' className='pt-4' dangerouslySetInnerHTML={{ __html: post.html }} />
            </InnerLayout>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tags
                website
                github
                devto
            }
        }
    }    
`