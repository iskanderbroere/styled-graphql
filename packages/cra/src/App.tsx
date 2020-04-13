import React, { useEffect, useState } from "react"
// @ts-ignore
import { getClassnames } from "styleql"

// const doc = `
//   query Styles {
//     typography {
//       textColor(color: "gray-800", focus: "indigo-200")
//     }
//   }
// `
export default function App() {
  const classnames = useGraphQLStyles()

  return (
    <div className="App">
      <button className={classnames}>Hi there!</button>
    </div>
  )
}

function useGraphQLStyles(doc?: string) {
  const [classnames, setClassnames] = useState("")

  useEffect(() => {
    async function getCn() {
      const cn = await getClassnames()
      setClassnames(cn)

    }
    getCn()
  }, [doc])

  return classnames
}
