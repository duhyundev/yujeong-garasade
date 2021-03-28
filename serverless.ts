import type { AWS } from '@serverless/typescript';

import saying from '@functions/saying';

const serverlessConfiguration: AWS = {
  service: 'yujeong-garasade',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    profile: 'duhyunkim',
    region: 'ap-northeast-2',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  useDotenv: true,
  // import the function via paths
  functions: { saying },
};

module.exports = serverlessConfiguration;
