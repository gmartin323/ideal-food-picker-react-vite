import React from "react";
import { Link } from "react-router-dom"
import Option from "./Option";
import { getTypes } from "../firebase";
import SelectBtn from "../components/SelectBtn";

export default function TypesList() {
  const [typesState, setTypesState] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  React.useEffect(() => {
    async function loadTypes() {
        setLoading(true)
        try {
            const data = await getTypes()
            console.log("data", data)
            setTypesState(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    loadTypes()
}, [])

  const types = typesState.map(item => {
    return (
            <Option 
              key={item.id}
              name={item.name}
            />
    )
  })
  
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
      return <h1>There was an error: {error.message}</h1>
  }

  return (
    <section className="select-page">
      <h2>TypesList</h2>
      <div className="type-list-wrapper">
        {types}
      </div>
      <SelectBtn />
      <Link to="../ingredients">Or, select an ingredient</Link>
    </section>
  )
}