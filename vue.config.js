const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/draggable-dashboard/'
})


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/draggable-dashboard/'
    : '/'
}