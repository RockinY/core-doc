import theme from './src/theme'

export default {
  title: '云社开发文档',
  description: '设计代码规范及元素组件使用说明',
  port: '3009',
  themeConfig: {
    colors: {
      primary: theme.brand.default,
      link: theme.brand.alt
    }
  },
  dest: './build'
}