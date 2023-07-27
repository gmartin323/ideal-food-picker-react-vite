export default function getMatchingDishesArray(dishes, selection) {
  const matchingDishesArray = []
  
  if ( // selection matches the type of at least one dish
    dishes.filter(function (dish) {
      return dish.type === selection
    }).length > 0) {
      const hasType = dishes.filter(function (dish) {
        return dish.type === selection
      })
      matchingDishesArray.push(hasType)

    } else { // selection doesn't match the type of at least one dish -> selection must be ingredient
      const hasIngredient = dishes.filter(function (dish) {
        return dish.ingredients.includes(selection)
      })
      matchingDishesArray.push(hasIngredient)
    } 
    
    return matchingDishesArray      
}