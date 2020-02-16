import { schema } from "./graphqlStyles"
import { graphql } from "graphql"

const defaultQuery = `
  query Styles {
    typography {
      textColor(color: GRAY_800, focus: "indigo-200", hover: "purple-900")
      fontFamily(font: MONO)
    }
  }
`

const objectToString = (obj): string => {
  return Object.values(obj)
    .map((value) => {
      return typeof value === "object" ? objectToString(value) : value
    })
    .flat(Infinity)
    .join(" ")
}

export async function getClassnames({ doc } = { doc: defaultQuery }) {
  const classnames = await graphql(schema, doc).then((r) => {
    console.log(r)
    const cn = objectToString(r.data)
    console.log(cn)
    return cn
  })
  return classnames
}
