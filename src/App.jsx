import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import MainPage from "./pages/MainPage"
import TypesList from "./pages/TypesList"
import IngredientsList from "./pages/IngredientsList"

export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />}/>
            <Route path="types" element={<TypesList/>}/>
            <Route path="ingredients" element={<IngredientsList/>}/>
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

