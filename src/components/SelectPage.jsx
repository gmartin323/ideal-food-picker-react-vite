import React from 'react'
import IngredientsList from './ingredientsList'
import TypesList from './TypesList'


export default function SelectPage() {

  return (
    <section>
      <IngredientsList />
      <TypesList />
    </section>
  )
}