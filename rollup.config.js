import typescript from 'rollup-plugin-typescript';

export default {
  entry: './index.ts',
  dest: './dist/index.js',
  format: 'cjs',
  sourceMap: true,
  plugins: [
    typescript(require('typescript'))
  ]
}
