import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

const path = require('path');
/**
 * 此文件专门用于解决 Webstorm 的 less alias 问题
 * @see https://www.yuque.com/arvinxx-fe/scafollding/css-webstorm-alias
 */
module.exports = {
  resolve: {
    alias: {
      theme: path.resolve(__dirname, './src/theme'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [new AntdDayjsWebpackPlugin()],
};
