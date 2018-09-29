const path = require('path');

module.exports = () => {
  const userRootPath = path.resolve(process.cwd());
  const buildPath = path.join(userRootPath, 'build');
  const srcPath = path.join(userRootPath, 'src');
  const dataPath = path.join(srcPath, 'data');
  const publicBuildPath = path.join(buildPath, 'public');
  const configPath = path.join(userRootPath, 'config');
  const assetPath = path.join(srcPath, 'assets');
  const webpackConfigPath = path.join(configPath, 'webpack.js');

  return {
    userRootPath,
    srcPath,
    buildPath,
    publicBuildPath,
    configPath,
    webpackConfigPath,
    sassVarsPath: path.join(dataPath, 'printvars.json'),
    entryPoint: path.join(srcPath, 'index.js'),
    publicSrcPath: path.join(srcPath, 'public'),
    serverSrcPath: path.join(srcPath, 'server'),
    clientSrcPath: path.join(srcPath, 'client'),
    clientBuildPath: path.join(buildPath, 'client'),
    serverBuildPath: path.join(buildPath, 'server'),
    testBuildPath: path.join(buildPath, 'test'),
    assetsBuildPath: path.join(publicBuildPath, '/'),
    userNodeModulesPath: path.join(userRootPath, 'node_modules'),
    userPackageJSONPath: path.join(userRootPath, 'package.json'),
    userPostcssConfigPath: path.join(configPath, 'postcss.config.js'),
    templateIndex: path.join(assetPath, 'index.html'),
  };
};
