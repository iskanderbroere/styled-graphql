import React, { useEffect, useState } from "react"
import { Button } from "./styledGraphql"
import { schema } from "./graphqlStyles"
import { graphql } from "graphql"

const doc = `
  query Styles {
    typography {
      textColor(color: "gray-800", focus: "indigo-200")
    }
  }
`
export default function App() {
  const classnames = useGraphQLStyles()
  return (
    <div className="App">
      <Button className={classnames} />
    </div>
  )
}

const objectToString = (obj): string => {
  return Object.values(obj)
    .map((value) => {
      return typeof value === "object" ? objectToString(value) : value
    })
    .flat(Infinity)
    .join(" ")
}

function useGraphQLStyles(props?) {
  const [classnames, setClassnames] = useState("")
  useEffect(() => {
    graphql(schema, doc).then((r) => {
      console.log(r)
      const cn = objectToString(r.data)
      console.log(cn)
      setClassnames(cn)
    })
  }, [])
  return classnames
}
