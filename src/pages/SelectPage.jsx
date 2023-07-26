import React from "react"
import { Link } from "react-router-dom"

export default function SelectPage() {

  return (
    <div>
      <Link to="types">Choose a type!</Link>
      <br/>
      <Link to="ingredients">Choose an ingredient!</Link>
    </div>
  )
}