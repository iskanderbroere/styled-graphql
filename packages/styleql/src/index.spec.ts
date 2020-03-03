import { getClassnames } from ".";

describe('getClassnames', () => {
  it('transforms nested values to an array of strings', async () => {
    const expected = 'text-gray-800 hover:text-purple-900 focus:text-indigo-200 font-mono'
    const actual = await getClassnames()

    expect(actual).toEqual(expected)
  })
})
