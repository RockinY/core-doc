import theme from './src/theme'

export default {
  title: '云社开发文档',
  description: '设计代码规范及元素组件使用说明',
  port: '3009',
  themeConfig: {
    logo: {
      src: 'https://yunshemix.oss-cn-hangzhou.aliyuncs.com/logos/logo.png'
    },
    colors: {
      primary: theme.brand.default,
      link: theme.brand.alt
    }
  },
  indexHtml: 'src/index.html',
  dest: './build'
}