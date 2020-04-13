import { graphQLDataToArrayOfClassnames } from './utils';
import { s as schema } from "./graphqlStyles"
import { execute, DocumentNode } from "graphql"
import { uniq, pipe, join } from 'ramda';
import defaultQuery from './defaultQuery.gql'

interface GetClassnamesArgs {
  doc?: DocumentNode
}

export async function getClassnames({ doc }: GetClassnamesArgs = { doc: defaultQuery }): Promise<string> {
    try {
    const { data = {}, errors } = await execute(schema, doc, null, null, { color: "GRAY_800" })
    if (errors && errors.length > 0) {
      errors.forEach(error => {
        console.log(Error(error.message))
      })
    }
    const classnames = graphQLDataToArrayOfClassnames(data)
    return pipe(
      // necessary?
      uniq,
      join(' '))(classnames)
  } catch (error) {
    debugger
  }
}
