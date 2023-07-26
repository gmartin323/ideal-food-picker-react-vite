import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import SelectPage from '../pages/SelectPage'
import IngredientsList from '../pages/IngredientsList'
import TypesList from '../pages/TypesList'


export default function MainPage() {

  return (
    <div className='site-wrapper'>
      <h1>Ideal Food Picker <i className="fa-solid fa-carrot"></i></h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

<SelectPage>
  <IngredientsList />
  <TypesList />
</SelectPage>