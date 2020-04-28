import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { remarkForm } from "gatsby-tinacms-remark"
import Sect from "../components/layout.module.scss"

class Landing extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    //const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className={Sect.mcon}>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <section
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></section>
        </div>
      </Layout>
    )
  }
}

const BlogPostForm = {
  /**
   * The list of fields tell us what the form looks like.
   */
  fields: [
    /**
     * This is a field definition. There are many types of
     * components available, including:
     *
     * * text
     * * textarea
     * * toggle
     * * date
     * * markdown
     * * color
     * * group
     * * group-list
     * * blocks
     */
    {
      //
      name: "frontmatter.title",
      component: "text",
      label: "Title",
      required: true,
    },
    { name: "frontmatter.date", component: "date", label: "Date" },
    {
      name: "frontmatter.description",
      component: "textarea",
      label: "Textarea",
    },
    { name: "rawMarkdownBody", component: "markdown", label: "Body" },
  ],
}

export default remarkForm(Landing, BlogPostForm)
export const query = graphql`
  query MyQuery6 {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      fileRelativePath: { eq: "/content/blog/testing/alternative.md" }
    ) {
      id
      frontmatter {
        title
      }
      html
      ...TinaRemark
    }
  }
`
