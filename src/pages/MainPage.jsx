import React from "react"
import { getTypes } from "../firebase";
import { getIngredients } from "../firebase";
import { getDishes } from "../firebase"
import loadData from "../components/hooks/loadData"
import getMatchingDishesArray from "./functions/getMatchingDishesArray"
import OptionsPage from "./OptionsPage"
import DishPage from "./DishPage"
import ConfirmBtn from "../components/ConfirmBtn"
import LoadingSpinner from "../components/LoadingSpinner"

export default function SelectPage() {

  const [selection, setSelection] = React.useState(null)
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

  /* if (dishes) {
    React.useEffect(() => {
      const matchingDishesArray = getMatchingDishesArray(dishes, selection)
      console.log(matchingDishesArray)

      if (matchingDishesArray.length === 1) {
        setSuggestedDish(matchingDishesArray)
      } else {
        const randomNumber = Math.floor(Math.random() * matchingDishesArray.length)
        setSuggestedDish(matchingDishesArray[randomNumber])
      }
      
    }, [dishes])
  } */


  function getSuggestedDish() {
    const matchingDishesArray = getMatchingDishesArray(dishes, selection)

    if (matchingDishesArray.length === 1) {
      setSuggestedDish(matchingDishesArray[0])
    } else {
      const randomNumber = Math.floor(Math.random() * matchingDishesArray.length)
      setSuggestedDish(matchingDishesArray[randomNumber])
    }
  }

  function handleClick(event, id) {
    setSelection(id)
  }

  function showDishPage() {
    getSuggestedDish()
    setSuggestDish(true)
  }

  if (loading) {
    return <LoadingSpinner />
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

    <div className="main-page">
      { showTypes 
          && 
        <section className="options-page">
          <OptionsPage option={types} handleClick={handleClick} selection={selection}/>
          <ConfirmBtn onClick={showDishPage} disabled={!selection ? true : false}/>
        </section>
      }

      { showIngredients 
          && 
        <section className="options-page">
          <OptionsPage option={ingredients} handleClick={handleClick} selection={selection}/>
          <ConfirmBtn onClick={showDishPage} disabled={!selection ? true : false}/>
        </section>
      }

      { suggestDish && <DishPage suggestedDish={suggestedDish}/> }
    

      { !showTypes && !showIngredients && !suggestDish 
          &&
        <div className="initial-page">
          <div
            onClick={() => setShowTypes(true)} 
            className="type-choice choice"
          >
            <h1>Choose a type!</h1>
          </div>
          <br/>
          <div 
            onClick={() => setShowIngredients(true)} 
            className="choice"
          >
            <h1>Choose an ingredient!</h1>
          </div>
        </div>
      }
    </div>

  )
}