import React from "react";
import './navbar.css'

function Navbar(){

return(
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">Contact Us</a>
      <a href="/portfolio" className="navbar-item">My Profile</a>
      <a href="/shop" className="navbar-item">Sign up</a>
      <a href="/blog" className="navbar-item">Login</a>
  </section>
)

}
export default Navbar;