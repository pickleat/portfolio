const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node, 
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve("./src/templates/blog-post.js")
    const tagTemplate = path.resolve("./src/templates/single-tag.js")

    const postsResults = await graphql(`
        {
            allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    limit: 2000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                tags
                            }
                        }
                    }
                }
                tagsGroup: allMarkdownRemark(limit: 2000) {
                    group(field: frontmatter___tags) {
                        fieldValue
                    }
                }
            }
            `)
     
    const posts = postsResults.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.fields.slug,
                },
            })
        })

    const tagsResults = await graphql(`
    {
        allMarkdownRemark {
            group(field: frontmatter___tags) {
                fieldValue
            }
        }   
    }
    `)
    
    const tags = tagsResults.data.allMarkdownRemark.group

    tags.forEach(( tag ) => {
        createPage({
            path: `/tags/${tag.fieldValue}/`,
            component: tagTemplate,
            context: {
                tag: tag.fieldValue
            },
        })
    })

}

    // const result = await graphql(`
    //     {
    //         postsRemark: allMarkdownRemark(
    //             sort: { order: DESC, fields: [frontmatter___date] }
    //             limit: 2000
    //         ) {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                     frontmatter {
    //                         tags
    //                     }
    //                 }
    //             }
    //         }
    //         tagsGroup: allMarkdownRemark(limit: 2000) {
    //             group(field: frontmatter___tags) {
    //                 fieldValue
    //             }
    //         }
    //     }
    // `)
    // Handle Errors
//     if(result.errors){
//         reporter.panicOnBuild('Error running GraphQL Query.')
//         return
//     }

//     // Extract Post Data and Create Pages
//     const posts = result.data.postsRemark.edges
//     posts.forEach(({ node }) => {
//         createPage({
//             path: node.fields.slug, 
//             component: blogPostTemplate
//         })
//     })

//     // Extract Tag Data and Create {tag} pages
//     const tags = result.data.tagsGroup.group

//     tags.forEach(({tag}) => {
//         createPage({
//             path: `/tags/${tag.fieldValue}/`,
//             component: tagTemplate,
//             context: {
//                 tag: tag.fieldValue
//             },
//         })
//     })
// }

