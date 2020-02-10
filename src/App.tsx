import React, { useEffect, useState } from "react"
import "./styles.css"
import { Button } from "./styledGraphql"
import { schema } from "./graphqlStyles"
import { graphql } from "graphql"

const doc = `
  query Styles {
    typography {
      textColor
      hover
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
    graphql(schema, doc, {
      typography(obj, args, context, info) {
        return { textColor: "text-pink", hover: "hover:text-red" }
      },
    }).then((r) => {
      const cn = objectToString(r.data)
      console.log(cn)
      setClassnames(cn)
    })
  }, [])
  return classnames
}
