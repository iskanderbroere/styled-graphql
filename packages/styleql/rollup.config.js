import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  external: ['graphql', 'graphql-tools'],
  plugins: [typescript(), resolve(), commonjs({
    namedExports: {
      'graphql-tools': ['makeExecutableSchema']
    }
  })]
};
