import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
// import { Helmet } from "react-helmet"
import Layout from "../components/layout";
import InnerLayout from "../components/innerLayout";
import Heading from "../components/H1HeadingAnd3Dots"
import H2Heading from "../components/H2Heading"
import BackButton from "../components/BackButton";

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
    <Heading title={"Tags"} svg="writing" />
    <InnerLayout>
    <H2Heading text='All tagged posts'/>
      
      <BackButton to="blog" text="Back to Blog" />
      <div className="flex mt-4">
        <div className="flex flex-col w-3/5">
          <ul>
            {group.map((tag) => (
              <li key={`${tag.fieldValue}`}>
                <Link
                  className={`blue-link text-xl`}
                  to={`/tags/${tag.fieldValue}/`}
                >
                  {tag.fieldValue}: ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </InnerLayout>
  </Layout>
);

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
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
