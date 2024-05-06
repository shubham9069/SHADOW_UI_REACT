import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import preserveDirectives from 'rollup-preserve-directives'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
import fs from 'fs-extra'
import path from 'path'
import pkg from './package.json'

function addPackageJson() {
  const outputDir = path.resolve(__dirname, 'dist')
  const packageJson = `{
  "name": "shadow-ui-react",
  "version": "${pkg.version}",
  "private": true,
  "author": "${pkg.author}",
  "description": "${pkg.description}",
  "homepage": "https://www.primereact.org",
  "keywords": [
    "React",
    "Component",
    "Library",
    "Rollup",
    "Typescript",
    "Sass"
  ],
  "unpkg": "index.js",
  "jsdelivr": "index.js",
  "main": "index.js",
  "module": "index.esm.js",
  "types": "index.d.ts",
  "web-types": "web-types.json",
  "peerDependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.0"
  },
  "peerDependenciesMeta": {
      "@types/react": {
          "optional": true
      }
  },
  "dependencies": {
  },
  "sideEffects": [
      "**/*.css"
  ]
}`

  !fs.existsSync(outputDir) && fs.mkdirSync(outputDir)
  fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson)
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      preserveDirectives(),
      peerDepsExternal(),
      resolve({
        browser: true
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extract: true,
        output: 'dist/resources/shadow-ui-react.css'
      }),
      terser(),
      addPackageJson(),
      copy({
        targets: [
          {
            src: 'src/index.css',
            dest: 'dist',
            rename: 'index.css'
          },
          { src: 'src/assets', dest: 'dist/' }
        ]
      })
    ],
    external: ['react', 'react-dom', 'react-router-dom', '/.scss$/']
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],

    external: [/\.(css|less|scss)$/]
  }
]
