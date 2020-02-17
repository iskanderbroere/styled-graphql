import { graphQLDataToArrayOfClassnames } from './utils';

describe('graphQLDataToarrayOfClassnames', () => {
  it('transforms nested values to an array of strings', () => {
    const input = {
      spacing: {
        padding: ["py-2", "px-4"],
      },
      typography: {
        textColor: ["text-gray-800"],
        fontWeight: ["font-semibold"],
      },
      backgrounds: {
        backgroundColor: ["bg-white", "hover:bg-gray-100"],
      },
      borders: {
        borderColor: ["border-gray-400"],
        borderWidth: ["border"],
        borderRadius: ["rounded"],
      },
      effects: {
        boxShadow: ["shadow"],
      }
    }
    const expected = [
      "py-2",
      "px-4",
      "text-gray-800",
      "font-semibold",
      "bg-white",
      "hover:bg-gray-100",
      "border-gray-400",
      "border",
      "rounded",
      "shadow",
    ]
    const actual = graphQLDataToArrayOfClassnames(input)

    expect(actual).toEqual(expected)
  })
})
