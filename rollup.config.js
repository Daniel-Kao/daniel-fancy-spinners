import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const dist = 'dist'
const bundle = 'bundle'

export default {
  input: 'src/index.js',
  external: [...Object.keys(pkg.peerDependencies || {})],
  output: [
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/${bundle}.umd.js`,
      format: 'umd',
      name: 'fancySpinner',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    resolve({ jsnext: true, main: true, browser: true }),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      inject: true,
      minimize: true,
      extensions: ['.css']
    })
  ]
}
