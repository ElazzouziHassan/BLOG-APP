import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.scss";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "write", url: "/write" },
  { id: 3, title: "single", url: "/single" },
];

function NavBar() {
  return (
    <div className="nav-bar">
      <Link href="/" className="logo">
        Wizardy.
      </Link>
      <div className="links">
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="link">
            {link.title}
          </Link>
        ))}
        <button className="logout" onClick={() => { console.log('user logout!') }}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default NavBar