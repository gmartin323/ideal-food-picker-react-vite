import React from "react"
import { Link } from "react-router-dom"

export default function SelectPage() {

  return (
    <div className="select-page">
      <Link 
        to="types" 
        className="select"
      >
        <h1>Choose a type!</h1>
      </Link>
      <br/>
      <Link 
        to="ingredients" 
        className="select"
      >
        <h1>Choose an ingredient!</h1>
      </Link>
    </div>
  )
}