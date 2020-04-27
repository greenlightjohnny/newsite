import React, { useState } from "react"
import { Link } from "gatsby"
import Style from "./navbar.module.scss"

function Navbar() {
  const [navnames, setNavnames] = useState(false)

  return (
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
            <Link to="/blogposts">Latest</Link>
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
  )
}

export default Navbar
