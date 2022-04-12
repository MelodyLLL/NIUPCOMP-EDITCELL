import babel from 'rollup-plugin-babel';
import vuePlugin from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import ts from 'rollup-plugin-typescript2';
import eslint from '@rollup/plugin-eslint';
// import fs from 'fs';
// import path from 'path';
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
// const baseFolder = './src/';
// const componentsFolder = 'component/';
// const components = fs
//   .readdirSync(baseFolder + componentsFolder)
//   .filter((f) =>
//     fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
//   );
// const entriespath = {
//   file: './src/main.ts',
//   ...components.reduce((obj, name) => {
//     obj[name] = baseFolder + componentsFolder + name + '/index.js';
//     return obj;
//   }, {}),
// };

const config = [
  {
    input: 'src/main.ts',
    output: [
      {
        banner: createBanner(),
        file: `dist/${pkg.name}.esm.js`,
        format: 'esm',
      },
    ],
    external: ['vue'],
    plugins: [
      resolve({
        extensions: ['.vue', '.jsx', '.js'],
      }),
      eslint({
        include: ['src/**'],
      }),
      vuePlugin({
        css: true,
        target: 'browser',
        compileTemplate: true,
      }),

      ts(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.vue'],
      }),
      postcss({
        plugins: [],
      }),
      terser(),
    ],
  },
];

export default config;
