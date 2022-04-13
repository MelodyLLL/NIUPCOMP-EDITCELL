import babel from 'rollup-plugin-babel';
import vuePlugin from 'rollup-plugin-vue';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import ts from 'rollup-plugin-typescript2';
import eslint from '@rollup/plugin-eslint';
import fs from 'fs';
import path from 'path';
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

const baseFolder = './packages';
const componentsFolder = '/';
const components = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter((f) =>
    fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
  );
console.log(components);
const entriespath = {
  main: './packages/main.ts',
  ...components.reduce((obj, name) => {
    obj[name] = baseFolder + componentsFolder + name + '/index.ts';
    return obj;
  }, {}),
};

const configList = [];

for (const [fileName, input] of Object.entries(entriespath)) {
  configList.push({
    input,
    output: {
      banner: createBanner(),
      name: fileName,
      file:
        fileName === 'main'
          ? path.resolve(__dirname, './es/main.esm.js')
          : path.resolve(
              __dirname,
              `./es/components/${fileName}/src/${fileName}.esm.js`
            ),
      format: 'esm',
      sourcemap: true,
      exports: 'auto',
    },
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

      ts({
        tsconfig: 'tsconfig.json',
        useTsconfigDeclarationDir: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.vue'],
      }),
      postcss({
        plugins: [autoprefixer()],
      }),
      // terser(),
    ],
  });
}

export default configList;
