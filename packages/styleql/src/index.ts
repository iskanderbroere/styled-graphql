import { graphQLDataToArrayOfClassnames } from './utils';
import { schema } from "./graphqlStyles"
import { graphql } from "graphql"
import { uniq } from 'ramda';

const defaultQuery = `
  query Styles($color: TextColors) {
    typography {
      textColor(color: $color, focus: "indigo-200", hover: "purple-900")
      fontFamily(font: MONO)
    }
  }
`

interface GetClassnamesArgs {
  doc?: string
}

export async function getClassnames({ doc }: GetClassnamesArgs = { doc: defaultQuery }): Promise<string[]> {
  try {
    const { data = {}, errors } = await graphql(schema, doc, null, null, { color: "GRAY_800" })
    const classnames = graphQLDataToArrayOfClassnames(data)
    console.log(errors)
    return uniq(classnames)
  } catch (error) {
    debugger
  }
}
