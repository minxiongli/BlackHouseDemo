const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    allowedHosts: [
      'https://4u894z2214.goho.co/', // 允许访问的域名地址，即花生壳内网穿透的地址
      '.goho.co'   // .是二级域名的通配符   
    ],
  },
});
