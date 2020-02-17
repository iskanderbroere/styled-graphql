import { pipe, map, flatten, values, is } from "ramda";

const isArray = is(Array)

export const graphQLDataToArrayOfClassnames =
  pipe(
    values,
    // recursively retrieve all values
    map(value => isArray(value) ? value : graphQLDataToArrayOfClassnames(value)),
    flatten
  )

