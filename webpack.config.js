const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve('./index.html')],
        use: {
            loader: 'file-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 5000,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",     // 적용될 html 경로
      // filename: "./index.html", // 결과 파일명
      meta: {
        // meta 태그를 추가
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      hash: true,       // 모든 스크립트, css 파일에 고유한 컴파일 해시 추가하여 캐시를 무효화
      showErrors: true, // 오류 정보가 html에 기록됨
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
  ],
};