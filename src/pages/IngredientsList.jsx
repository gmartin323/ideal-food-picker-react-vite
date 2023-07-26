import React from "react";
import { Link } from "react-router-dom"
import Option from "./Option";
import { getIngredients } from "../firebase";
import SelectBtn from "../components/SelectBtn";

export default function IngredientsList() {

  const [ingredientsState, setIngredientsState] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  React.useEffect(() => {
    async function loadIngredients() {
        setLoading(true)
        try {
            const data = await getIngredients()
            console.log("data", data)
            setIngredientsState(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    loadIngredients()
}, [])

  const ingredients = ingredientsState.map(item => {
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
      <h2>IngredientsList</h2>
      <div className="type-list-wrapper">
        {ingredients}
      </div>
      <SelectBtn />
      <Link to="../types">Or, select a type</Link>
    </section>
  )
}