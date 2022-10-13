import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkItems= links.map((link)=>{
    return <a key={link} href = {link}>{link}</a>
  })

  return <nav>
    {linkItems}
    {/* <a href="home">home</a>
    <a href="about">about</a>
    <a href="projects">projects</a> */}

  </nav>;
}

export default NavBar;
