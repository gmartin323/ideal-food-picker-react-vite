import React from "react";
import Dish from "./Dish";

export default function DishPage(props) {

  

  return (
    <section className="dish-page">
      <Dish suggestedDish={props.suggestedDish}/>
    </section>
  )
}