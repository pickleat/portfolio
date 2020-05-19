import React from 'react';
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
// import { Helmet } from "react-helmet"
import Layout from '../components/layout';
import Heading from '../components/heading';
import BackButton from '../components/BackButton'

const TagsPage = ({
    data: {
        allMarkdownRemark: { group }, 
        // site: {
        //     siteMetadata: { title }, 
        // },
    },
}) => (
    <Layout>
        {/* <Helmet title={title} /> */}
        <Heading title={'Tags'} svg='writing' />
        <div className='bg-yellow-100 text-navy px-10 pb-10 w-full md:max-w-6xl'>
            <h2>All the Posts tagged on the Site</h2>
            <BackButton to='blog' text='Back to Blog' />
            <div className='flex mt-4'>
                <div className='flex flex-col w-3/5'>
                    <ul>
                        {group.map(tag => (
                            <li key={tag.fieldValue}>
                                <Link className={`blue-link text-xl`} to={`/tags/${tag.fieldValue}/`}>
                                    {tag.fieldValue}: ({tag.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
)

TagsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        // site: PropTypes.shape({
        //     siteMetadata: PropTypes.shape({
        //         title: PropTypes.string.isRequired,
        //     }),
        // }),
    }),
}

export default TagsPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`