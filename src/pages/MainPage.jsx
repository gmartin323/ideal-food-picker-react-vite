import React from "react"
import { Link } from "react-router-dom"
import { getDishes } from "../firebase"
import loadData from "../components/hooks/loadData"
import getMatchingDishesArray from "./functions/getMatchingDishesArray"
import DishPage from "./DishPage"

export default function SelectPage() {

  const [selection, setSelection] = React.useState("saucy")
  const [dishes, setDishes] = React.useState([])
  const [suggestedDish, setSuggestedDish] = React.useState(null)
  const [suggestDish, setSuggestDish] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    loadData(getDishes, setDishes, setLoading, setError)
  }, [])

  if (dishes) {
    React.useEffect(() => {
      const matchingDishesArray = getMatchingDishesArray(dishes, selection)

      console.log(matchingDishesArray)

      if (matchingDishesArray.length === 1) {
        setSuggestedDish(matchingDishesArray[0])
      } else {
        const randomNumber = Math.floor(Math.random() * matchingDishesArray.length)
        console.log("random number", randomNumber)
        setSuggestedDish(matchingDishesArray[randomNumber])
      }
    }, [])
    

    console.log(suggestedDish)
  }

  

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
      return <h1>There was an error: {error.message}</h1>
  }

  if (suggestDish) {
    return (
      <DishPage suggestedDish={suggestedDish}/>
    )
  }

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