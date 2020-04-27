import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { remarkForm } from "gatsby-tinacms-remark"
import Sect from "../components/layout.module.scss"
import MedPhoto from "../../content/assets/med.svg"
import SciPhoto from "../../content/assets/sci.svg"
import QPhoto from "../../content/assets/q.svg"

class Landing extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    //const posts = data.allMarkdownRemark.edges

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <div className={Sect.sect1}>
            <div className={Sect.flex1}>
              <h3 className={Sect.mid}>
                {data.markdownRemark.frontmatter.title}
              </h3>
              <div
                className={Sect.mid}
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              ></div>
            </div>
            <div>
              <img src={MedPhoto}></img>
            </div>
          </div>
          <div className={Sect.sect2}>
            <div className={Sect.flex2}>
              <div>
                <img src={SciPhoto}></img>
              </div>
              <div>
                <h3>testing</h3>
                <p>Again more info</p>
              </div>
            </div>
          </div>

          <div className={Sect.sect3}>
            <div className={Sect.flex3}>
              <div>
                <h3>testing</h3>
                <p>Again more info</p>
              </div>
              <div>
                <img src={QPhoto}></img>
              </div>
            </div>
          </div>
        </Layout>
      </>
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
  query MyQuery2 {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fileRelativePath: { eq: "/content/blog/testing/index.md" }) {
      id
      frontmatter {
        title
      }
      html
      ...TinaRemark
    }
  }
`

// import React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title="All posts" />
//         <Bio />
//       </Layout>
//     )
//   }
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
