import React from "react";
import { Link } from "react-router-dom"
import Option from "./Option";
import { getIngredients } from "../firebase";
import loadData from "../components/hooks/loadData"; 
import SelectBtn from "../components/SelectBtn";

export default function IngredientsList() {

  const [ingredients, setIngredients] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  React.useEffect(() => {
    loadData(getIngredients, setIngredients, setLoading, setError)
}, [])

  const ingredientsEl = ingredients.map(item => {
    return (
            <Option 
              key={item.id}
              name={item.name}
            />
    )
  })
  
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
      return <h1>There was an error: {error.message}</h1>
  }

  return (
    <section className="select-page">
      <div className="ingredient-list-wrapper list-wrapper">
        {ingredientsEl}
      </div>
      <SelectBtn />
      <Link to="../types">Or, select a type</Link>
    </section>
  )
}