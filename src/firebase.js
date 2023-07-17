import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDsZJmRt-MDp8ykIujmkiQIT0NXrIUf0ZY",
  authDomain: "ideal-restaurant-picker.firebaseapp.com",
  projectId: "ideal-restaurant-picker",
  storageBucket: "ideal-restaurant-picker.appspot.com",
  messagingSenderId: "574212382818",
  appId: "1:574212382818:web:551ba450dd3356fa8f313b"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const typesRef = collection(db, "types")
const ingredientsRef = collection(db, "ingredients")
const dishesRef = collection(db, "dishes")

export async function getIngredients() {
  const snapshot = await getDocs(ingredientsRef)
  const ingredients = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  
  return ingredients
}

export async function getTypes() {
  const snapshot = await getDocs(typesRef)
  const types = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))

  return types
}

export async function getDishes() {
  const snapshot = await getDocs(dishesRef)
  const dishes = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))

  return dishes
}