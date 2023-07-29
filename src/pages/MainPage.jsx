import React from "react"
import { getTypes } from "../firebase";
import { getIngredients } from "../firebase";
import { getDishes } from "../firebase"
import loadData from "../components/hooks/loadData"
import getMatchingDishesArray from "./functions/getMatchingDishesArray"
import OptionsPage from "./OptionsPage"
import DishPage from "./DishPage"
import ConfirmBtn from "../components/ConfirmBtn"

export default function SelectPage() {

  const [selection, setSelection] = React.useState("saucy")
  const [types, setTypes] = React.useState([])
  const [showTypes, setShowTypes] = React.useState(false)
  const [ingredients, setIngredients] = React.useState([])
  const [showIngredients, setShowIngredients] = React.useState(false)
  const [dishes, setDishes] = React.useState([])
  const [suggestedDish, setSuggestedDish] = React.useState(null)
  const [suggestDish, setSuggestDish] = React.useState(false)

  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    loadData(getTypes, setTypes, setLoading, setError)
    loadData(getIngredients, setIngredients, setLoading, setError)
    loadData(getDishes, setDishes, setLoading, setError)
  }, [])

  if (dishes) {
    React.useEffect(() => {
      const matchingDishesArray = getMatchingDishesArray(dishes, selection)

      if (matchingDishesArray.length === 1) {
        setSuggestedDish(matchingDishesArray)
      } else {
        const randomNumber = Math.floor(Math.random() * matchingDishesArray.length)
        setSuggestedDish(matchingDishesArray[randomNumber])
      }
      
    }, [dishes])
  }

  function showDishPage() {
    setSuggestDish(true)
  }

  console.log(suggestDish)

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
      return <h1>There was an error: {error.message}</h1>
  }

  /* if (showTypes) {
    return (
      <section className="select-page">
        <OptionsPage option={types}/>
        <ConfirmBtn onClick={showDishPage}/>
      </section>
    )
  } */

  if (suggestDish) {
    return (
      <DishPage suggestedDish={suggestedDish}/>
    )
  }

  return (

    <div>
      { showTypes 
          && 
        <section className="select-page">
          <OptionsPage option={types}/>
          <ConfirmBtn onClick={showDishPage}/>
        </section>
      }

      { showIngredients 
          && 
        <section className="select-page">
          <OptionsPage option={ingredients}/>
          <ConfirmBtn onClick={showDishPage}/>
        </section>
      }

      { suggestDish && <DishPage suggestedDish={suggestedDish}/> }
    

      { !showTypes && !showIngredients && !suggestDish 
          &&
        <div className="select-page">
          <div
            onClick={() => setShowTypes(true)} 
            className="choice-box"
          >
            <h1>Choose a type!</h1>
          </div>
          <br/>
          <div 
            onClick={() => setShowIngredients(true)} 
            className="choice-box"
          >
            <h1>Choose an ingredient!</h1>
          </div>
        </div>
      }
    </div>

  )
}