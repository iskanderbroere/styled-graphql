import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from "@wessberg/rollup-plugin-ts";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import json from '@rollup/plugin-json';
import builtinModules from "builtin-modules";
import pkg from './package.json';

const extensions = ['.mjs', '.js', '.json', '.node', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    ...builtinModules,
    'graphql'
  ],
  plugins: [
    resolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'nexus-future': ['schema']
      }
    }),
    json({
      compact: true,
      preferConst: true
    }),
    ts({
      transpiler: "babel",
      exclude: [
        "node_modules/**/*.*",
        "../../node_modules/**/*.*",
      ],
    }),
    sizeSnapshot()
  ]
};
