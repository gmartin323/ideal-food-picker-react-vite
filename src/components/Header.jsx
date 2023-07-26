import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <Link className="site-logo" to="/">Ideal Food Picker <i className="fa-solid fa-carrot"></i></Link>
    </header>
  )
}