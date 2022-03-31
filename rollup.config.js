import babel from 'rollup-plugin-babel';
import vuePlugin from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import ts from 'rollup-plugin-typescript2';
import eslint from '@rollup/plugin-eslint';
import pkg from './package.json';
// 先定义一个 base 配置
// 创建打包文件的头部信息
const createBanner = () => {
  return `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} test
  * @license ISC
  */`;
};

export default {
  input: 'src/main.ts',
  output: {
    banner: createBanner(),
    file: 'dist/index.js',
    format: 'esm',
  },
  external: ['vue'],
  plugins: [
    vuePlugin({
      css: true,
      target: 'browser',
      compileTemplate: true,
    }),
    resolve({
      extensions: ['.vue', '.jsx', '.js'],
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
    }),
    postcss({
      plugins: [],
    }),
    ts(),
    terser(),
    eslint(),
  ],
};
