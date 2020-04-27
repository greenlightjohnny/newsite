import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import { rhythm, scale } from "../utils/typography"
import { withPlugin } from "tinacms"
import { createRemarkButton } from "gatsby-tinacms-remark"
import slugify from "slugify"
import Sect from "./layout.module.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h3 className={Sect.hone}>
            <Link className={Sect.link1} to={`/`}>
              {title}
            </Link>
          </h3>
          <ul className={Sect.block}>
            <li>
              <Link className={Sect.link1} to={`/blogposts`}>
                Latest
              </Link>
            </li>

            <li>
              <Link className={Sect.link1} to={`/contact`}>
                Contact
              </Link>
            </li>
            <li>
              <Link className={Sect.link1} to={`/about`}>
                About
              </Link>
            </li>
          </ul>
        </>
      )
    } else {
      header = (
        <>
          <h3 className={Sect.hone}>
            <Link className={Sect.link1} to={`/`}>
              {title}
            </Link>
          </h3>
          <ul className={Sect.block}>
            <li>
              <Link className={Sect.link1} to={`/blogposts`}>
                Latest
              </Link>
            </li>

            <li>
              <Link className={Sect.link1} to={`/contact`}>
                Contact
              </Link>
            </li>
            <li>
              <Link className={Sect.link1} to={`/about`}>
                About
              </Link>
            </li>
          </ul>
        </>

        //   <h3
        //     style={{
        //       fontFamily: `Montserrat, sans-serif`,
        //       marginTop: 0,
        //     }}
        //   >
        //     <Link
        //       style={{
        //         boxShadow: `none`,
        //         textDecoration: `none`,
        //         color: `inherit`,
        //       }}
        //       to={`/`}
        //     >
        //       {title}
        //     </Link>
        //   </h3>
        //
      )
    }
    return (
      <div className={Sect.large}>
        <header className={Sect.header}>{header}</header>
        <div
          className={Sect.container}
          style={{
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        ></div>
        <main>{children}</main>
        <footer className={Sect.footer}>
          © {new Date().getFullYear()}, all rights reserved
          {` `}
        </footer>
      </div>
    )
  }
}

/**
 * This a is `create-content` plugin. It describes
 * a form for creating blog posts as as markdown files.
 * Registering this plugin reveals the `+` button in
 * the sidebar.
 */
const CreatePostPlugin = createRemarkButton({
  /**
   * Clicking the `+` button reveals a lost of content
   * types that can be created. This field sets the
   * label in that list.
   */
  label: "Post",
  /**
   * Clicking the `Post` in the `+` list opens a modal.
   * This modal contains a form with these fields.
   */
  fields: [{ name: "title", component: "text", label: "Title" }],
  /**
   * Tina needs to know where the new markdown file is
   * going to live. This `filename` function generates
   * that path from the form's values. This function is required.
   */
  filename(form) {
    let slug = slugify(form.title.toLowerCase())

    return `content/blog/${slug}/index.md`
  },
  /**
   * We can optionally generate default frontmatter for the
   * new post. This can be a combination of form data and
   * programmatically generated.
   */
  frontmatter(form) {
    return {
      title: form.title,
      date: new Date(),
      description: "",
    }
  },
  /**
   * Finally, we can generate a default body. Right now
   * we don't need to do that.
   */
  body(form) {
    return ""
  },
})

/**
 * Our `CreatePostPlugin` will be available any time the
 * `Layout` component is rendered in the site.
 */
export default withPlugin(Layout, CreatePostPlugin)
