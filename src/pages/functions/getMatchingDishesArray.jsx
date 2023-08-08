import getCurrentDay from "./getCurrentDay"

export default function getMatchingDishesArray(dishes, selection) {
  const matchingDishesArray = []
  const currentDay = getCurrentDay()

  // filter out dishes at restaurants that are closed on the current day
  const availableDishes = dishes.filter(function (dish) {
    return dish.closedDay !== currentDay
  })

  if ( // selection matches the type of at least one dish
    availableDishes.filter(function (dish) {
      return dish.type === selection
    }).length > 0) {
      const hasType = availableDishes.filter(function (dish) {
        return dish.type === selection
      })
      matchingDishesArray.push(hasType)

    } else { // selection doesn't match the type of at least one dish -> selection must be ingredient
      const hasIngredient = availableDishes.filter(function (dish) {
        return dish.ingredients.includes(selection)
      })
      matchingDishesArray.push(hasIngredient)
    } 
    // new array has been pushed into original array so must return the array at 0 index of original array
    return matchingDishesArray[0]      
}