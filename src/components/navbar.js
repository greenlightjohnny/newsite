import React, { useState } from "react"
import { Link } from "gatsby"
import Style from "./navbar.module.scss"

function Navbar() {
  const [navnames, setNavnames] = useState(false)

  return (
    <div className={Style.outer}>
      <div className={Style.container}>
        <h3>
          <Link to="/">
            HER2.<span className={Style.me}>ME</span>
          </Link>
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
              <Link className={Style.darrow} to="/basics">
                Basics
                <div className={Style.drop}>
                  <Link to="/">What is HER2?</Link>
                  <Link to="/">Stages</Link>
                  <Link to="/">History</Link>
                  <Link to="/">HER2+ (Positive)</Link>
                  <Link to="/">HER2- (Negative)</Link>
                  <Link to="/">link6</Link>
                </div>
              </Link>
            </li>
            <li>
              <Link className={Style.darrow} to="/traditional">
                Traditional
                <div className={Style.drop}>
                  <Link to="/">Chemotherapy</Link>
                  <Link to="/">Immunotherapy</Link>
                  <Link to="/">Surgery</Link>
                  <Link to="/">Radiation</Link>
                  <Link to="/">Herceptin (Trastuzumab)</Link>
                  <Link to="/">Perjeta (Pertuzumab)</Link>
                  <Link to="/">Kadcyla</Link>
                  <Link to="/">Nerlynx (Neratinib)</Link>
                  <Link to="/">Tykerb (Lapatinib)</Link>
                </div>
              </Link>
            </li>
            <li>
              <Link className={Style.darrow} to="/alternative">
                Alternative
                <div className={Style.drop}>
                  <Link to="/">Clinical Trials</Link>
                  <Link to="/">Fake Treatments</Link>
                  <Link to="/">Herceptin (Trastuzumab)</Link>
                  <Link to="/">link4</Link>
                  <Link to="/">link5</Link>
                  <Link to="/">link6</Link>
                </div>
              </Link>
            </li>
            <li>
              <Link className={Style.darrow} to="/blogposts">
                Latest{" "}
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
              <Link to="/about">About</Link>
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
