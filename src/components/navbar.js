import React, { useState } from "react"
import { Link } from "gatsby"
import Style from "./navbar.module.scss"

function Navbar() {
  const [navnames, setNavnames] = useState(false)

  return (
    <div className={Style.outer}>
      <div className={Style.container}>
        <h3>
          <Link to="/">NewSite</Link>
        </h3>

        <nav
          className={`${Style.mobile} ${
            navnames ? Style.showmenu : Style.hidemenu
          }`}
        >
          <ul>
            <li onClick={() => setNavnames(false)}>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/basics">
                Basics
                <div className={Style.drop}>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/traditional">
                Traditional
                <div className={Style.drop}>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/alternative">
                Alternative
                <div className={Style.drop}>
                  <Link to="/">link1</Link>
                  <Link to="/">link2</Link>
                  <Link to="/">link3</Link>
                  <Link to="/">link4</Link>
                  <Link to="/">link5</Link>
                  <Link to="/">link6</Link>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/blogposts">
                Latest{" "}
                <div className={Style.drop}>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                  <Link to="/">Home</Link>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <button
          className={Style.navbutton}
          onClick={() => setNavnames(!navnames)}
        >
          <span
            className={`${Style.navspan} ${navnames ? Style.animate : null} `}
          ></span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
