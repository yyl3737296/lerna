const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');
  
module.exports = override(
    addWebpackAlias({
        ["mock"]: path.resolve(__dirname, "src/mock"),
        ["containers"]: path.resolve(__dirname, "src/containers")
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' }
    })
);