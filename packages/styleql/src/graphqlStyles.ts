import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

enum TextColors {
  GRAY_800
  EMPIRE
  JEDI
}

enum Fonts {
  SANS
  SERIF
  MONO
}

type Typography {
  textColor(color: TextColors, hover: String, focus: String): String
  fontFamily(font: Fonts): String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  typography: Typography
}`
const resolvers = {
  TextColors: {
    GRAY_800: 'gray-800'
  },
  Query: {
    typography() {
      return {}
    }
  },
  Typography: {
    textColor(_, args) {
      const colorClassname = `text-${args.color}`
      const colorHoverClassname = args.hover && `hover:text-${args.hover}`
      const colorFocusClassname = args.focus && `focus:text-${args.focus}`
      return [colorClassname, colorHoverClassname, colorFocusClassname].filter(Boolean).join(' ')
    },
    fontFamily(_, args) {
      switch (args.font) {
        case 'SANS':
          return 'font-sans'
        case 'SERIF':
          return 'font-serif'
        case 'MONO':
          return 'font-mono'
        default:
          return ''
      }
    }
  },
}

export const schema = makeExecutableSchema({ resolvers, typeDefs })
