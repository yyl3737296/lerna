const webpack = require('webpack');
const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');
process.env.GENERATE_SOURCEMAP = "false";
const multipleEntry = require('react-app-rewire-multiple-entry')([
    {
      entry: './src/portal/src/index.js'
    }
  ]);
// module.exports = override(
//     addWebpackAlias({
//         ["mock"]: path.resolve(__dirname, "src/mock"),
//         ["containers"]: path.resolve(__dirname, "src/containers"),
//         ['components']: path.resolve(__dirname, "packages/components/basic")
//     }),
//     addLessLoader({
//         javascriptEnabled: true,
//         modifyVars: { '@primary-color': '#1DA57A' }
//     }),
//     (config) => {
//         config.plugins = [...config.plugins,...myPlugin];
//         config.module.entry = {
//             "index":["./src/portal/index.js"]
//         }
//         return config;
//     }
// );

module.exports = {
    webpack (config, env) {
        multipleEntry.addMultiEntry(config);
    
      config = override(
        addWebpackAlias({
            ["mock"]: path.resolve(__dirname, "src/mock"),
            ["containers"]: path.resolve(__dirname, "src/containers"),
            ['components']: path.resolve(__dirname, "packages/components/basic")
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' }
        })
      )(config, env)
  
      //  Return the webpack config
      return config
    }
  }