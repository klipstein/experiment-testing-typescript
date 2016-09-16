import typescript from 'rollup-plugin-typescript';

export default {
  entry: './index.ts',
  dest: './dist/index.js',

  plugins: [
    typescript(require('typescript'))
  ]
}
