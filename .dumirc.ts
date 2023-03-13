
// @ts-nocheck

import { defineConfig } from 'dumi'
import path, { join } from 'path'
import { readdirSync } from 'fs';

const BASE_URL = '' // 'react-admin' // '/lemon'

const headPkgList = [];

// const pkgList = readdirSync(join(__dirname, '/packages')).filter(
//   (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
// );
// const alias = pkgList.reduce((pre, pkg) => {
//   pre[`@vis/${pkg}`] = join(__dirname, '/packages', pkg, 'src');
//   return {
//     ...pre,
//   };
// }, {});


export default defineConfig({
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    memo.plugins.delete('copy')
  },
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true
  //     },
  //     'antd'
  //   ],
  // ],
  alias: {
    comp: require.resolve('./src'),
    // '@vis/components': join(__dirname, 'src')
  },
  // apiParser: {},
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/components/index.ts',
  //   // docDirs: ['dumi/docs'],
  //   // atomDirs: [{ type: 'component', dir: './src/components' }]
  // }
})

// export default defineConfig({
//   // mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
//   title: 'React-Admin Component', // 组件库名称
//   // # favicon 配置项升级
//   favicons: [BASE_URL + '/images/logo.png'],

//   hash: true, // 避免缓存
//   base: BASE_URL,
//   publicPath: BASE_URL + '/', // 配置 webpack 的 publicPath
//   // 配置输出路径。
//   outputPath: 'docs-dist',
//   // 网站描述配置
//   mock: {},
//   //  将悉数路由输出为 HTML 目录结构，避免刷新页面时 404。
//   // exportStatic: {},
//   // 配置 antd 按需加载
//   extraBabelPlugins: [
//     [
//       'babel-plugin-import',
//       {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: true
//       },
//       'antd'
//     ]
//   ],
//   theme: { '@c-primary': '#1DA57A' },
//   chainWebpack: (memo, { env, webpack, createCSSRule }) => {
//     memo.plugins.delete('copy')
//     // memo.module
//     //   .rule('js')
//     //   .test(/\.(js|mjs|jsx|ts|tsx)$/)
//     //   .include.add(path.join(__dirname, '..', '..', '..', '..'))
//     //   .end()
//     //   .exclude.add(/node_modules/)
//     //   .end()
//     //   .use('babel-loader')
//     // debugger
//     // console.log('memo.resolve.alias', memo.resolve.alias)

//     // // memo.resolve.alias.set('@', path.join(__dirname, './src'))
//     // // memo.resolve.alias.set('assets', path.join(__dirname, './src/assets'))
//     // // memo.resolve.alias.set('utils', path.join(__dirname, './src/utils'))
//     // memo.resolve.alias.set('comp', path.join(__dirname,  '..', '..', '..', '..', 'src', 'components'))
//   },

//   alias: {
//     // comp: require.resolve('../../src/components'),
//     // components: '../../src/components',
//     // comp: path.join(__dirname, '..', 'src', 'components')
//     comp: require.resolve('./src'),
//   },
//   // ----主题配置------
//   themeConfig: {
//     name: 'React-Admin Component',
//     logo: BASE_URL + '/images/logo.png',
//     darkSwitch: false,
//     sidebar: {
//       '/guild': [
//         {
//           link: '/guild/quick-start',
//           title: '快速开始',
//           meta: {},
//           children: []
//         }
//       ],
//       '/components': [
//         {
//           title: '表单 Form',
//           link: '/components/DateRange',
//           meta: {},
//           children: [
//             {
//               title: '表单 Form',
//               link: '/components/DateRange',
//               meta: {},
//               children: []
//             }
//           ]
//         }
//       ]
//     },
//     nav: {
//       // mode可选值有：override、append、prepend
//       // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
//       // - append: 将 value 中的导航追加到约定路由后面
//       // - prepend: 将 value 中的导航添加到约定路由前面
//       mode: 'override',
//       value: [
//         {
//           title: '教程',
//           link: '/guild'
//         },
//         {
//           title: '博客',
//           link: '/blog'
//         },
//         {
//           title: '组件',
//           link: '/components'
//         },
//         {
//           title: 'GitHub',
//           link: 'https://github.com/viewweiwu/amiya'
//         }
//       ]
//     }
//   },

//   // -------重点配置项---------
//   // apiParser: {},
//   resolve: {
//     // 配置入口文件路径，API 解析将从这里开始
//     entryFile: './src/components/index.js',
//     // docDirs: ['dumi/docs'],
//     atomDirs: [{ type: 'component', dir: './src/components' }]
//   }
// })