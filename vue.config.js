module.exports ={
  configureWebpack:{
    resolve:{
      alias:{
        //默认已经配置好的  '@' ：‘src’
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}