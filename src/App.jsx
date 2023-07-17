import React from "react"
import { getIngredients, getTypes, getDishes } from "./firebase"

export default function App() {

  getIngredients()
  getTypes()
  getDishes()

  return (
      <div className="App">
        <h1>Ideal Food Picker <i className="fa-solid fa-carrot"></i></h1>
        <p>Types go here: </p>
      </div>
  )
}

