import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import InnerLayout from "../components/innerLayout"
import Layout from "../components/layout"
import Heading from "../components/Heading"
import BackButton from "../components/BackButton"

export default ({ pageContext, data }) => {
    const { tag } = pageContext
    console.log(tag)
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `tag: "${tag}"`
    // const tagHeader = `post${totalCount === 1 ? "" : "s"} "${tag}"`

    return(
    <Layout>
      <Heading title='Tagged Posts' svg='writing'/>
      <InnerLayout>
        <h2>{tagHeader}</h2>
        <BackButton to='tags' text='Back to all Tags'/>
        <>
            {edges.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                  <div className='pt-8 ' key={node.id}>
                    <Link className='blue-link text-xl' to={node.fields.slug}>{node.frontmatter.title}</Link>
                    <p className='py-4'>{node.excerpt}</p>
                    <div className='flex justify-end'>
                      <span className='text-right text-sm'><i>Reading Time: {node.timeToRead}mins</i></span>
                    </div>
                  </div>
                )
            })}
        </>
      </InnerLayout>
    </Layout>        
    )
}

// Tags.propTypes = {
//     pageContext: PropTypes.shape({
//       tag: PropTypes.string.isRequired,
//     }),
//     data: PropTypes.shape({
//       allMarkdownRemark: PropTypes.shape({
//         totalCount: PropTypes.number.isRequired,
//         edges: PropTypes.arrayOf(
//           PropTypes.shape({
//             node: PropTypes.shape({
//               frontmatter: PropTypes.shape({
//                 title: PropTypes.string.isRequired,
//               }),
//               fields: PropTypes.shape({
//                 slug: PropTypes.string.isRequired,
//               }),
//             }),
//           }).isRequired
//         ),
//       }),
//     }),
//   }



export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
          }
          timeToRead
          fileAbsolutePath
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`