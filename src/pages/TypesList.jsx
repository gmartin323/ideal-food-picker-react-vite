import React from "react";
import { Link } from "react-router-dom"
import Option from "./Option";
import loadData from "../components/hooks/loadData";
import { getTypes } from "../firebase";
import SelectBtn from "../components/SelectBtn";

export default function TypesList() {
  const [types, setTypes] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  React.useEffect(() => {
    loadData(getTypes, setTypes, setLoading, setError)
}, [])

  const typesEl = types.map(item => {
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
      <div className="type-list-wrapper list-wrapper">
        {typesEl}
      </div>
      <SelectBtn />
      <Link to="../ingredients">Or, select an ingredient</Link>
    </section>
  )
}