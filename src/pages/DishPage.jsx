import React from "react";
import Dish from "./Dish";

export default function DishPage(props) {
  return (
    <section>
      <Dish suggestedDish={props.suggestedDish}/>
    </section>
  )
}