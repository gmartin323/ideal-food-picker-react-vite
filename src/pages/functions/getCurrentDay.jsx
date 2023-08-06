export default function getCurrentDay() {

  let currentDay = ""

  var dateObj = new Date()
  currentDay = dateObj.toLocaleString("default", { weekday: "long" }).toLowerCase()
  
  return currentDay
}