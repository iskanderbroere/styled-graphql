import { buildSchema } from "graphql"

export const schema = buildSchema(`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.
type Book {
  title: String
  author: String
}

type Typography {
  textColor: String
  hover: String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books: [Book]
  typography: Typography
}`)

const tailwindClassnames = {
  typography: {
    textColor: {
      red: "red",
      pink: "pink",
    },
  },
}

export const styledGql = (document): { classnames: string } => ({
  classnames: "aaa",
})
