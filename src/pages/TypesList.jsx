import React from "react";
import Type from "./Type";
import { getTypes } from "../firebase";
import SelectBtn from "../components/SelectBtn";

export default function TypesList(props) {
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

  const types = typesState.map(type => {
    return (
            <Type 
              key={type.id}
              name={type.name}
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
    <section>
      <h2>TypesList</h2>
      <div>
        {types}
      </div>
      <SelectBtn />
    </section>
  )
}