import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { writeFileSync } from 'fs';
import path from 'path';
 
const external = ['react', 'prop-types'];
const outputTypes = [
  { file: './dist/es/index.js', format: 'umd', name:'umd' }
];
 
const tasks = outputTypes.map(output => ({
  input: './index.js',
  external,
  output,
  name: 'my-library',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ],
}));
 
export default tasks;
