import React from "react"
import { Link } from "react-router-dom"

export default function Header() {

  function refreshPage(){ 
    window.location.reload()
  }

  return (
    <header className="header">
      <h1 to="/" className="site-logo" onClick={refreshPage}>Ideal Food Picker <i className="fa-solid fa-carrot"></i></h1>
    </header>
  )
}