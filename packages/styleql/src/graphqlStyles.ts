import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./typeDefs.gql";

const resolvers = {
  TextColors: {
    GRAY_800: "gray-800"
  },
  Query: {
    typography() {
      return {};
    }
  },
  Typography: {
    textColor(_, args): string[] {
      const colorClassname = `text-${args.color}`;
      const colorHoverClassname = args.hover && `hover:text-${args.hover}`;
      const colorFocusClassname = args.focus && `focus:text-${args.focus}`;
      return [colorClassname, colorHoverClassname, colorFocusClassname].filter(
        Boolean
      );
    },
    fontFamily(_, args): string[] {
      switch (args.font) {
        case "SANS":
          return ["font-sans"];
        case "SERIF":
          return ["font-serif"];
        case "MONO":
          return ["font-mono"];
        default:
          return [];
      }
    }
  }
};

export const schema = makeExecutableSchema({ resolvers, typeDefs });
