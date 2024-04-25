// webpack.config.js
const path = require("path"); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: { 
    main: "./src/index.js",
    productPage: "./src/components/product_page.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", 
    publicPath: "",
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // указываем папку, где содержатся HTML файлы
    },
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true // сайт будет открываться сам при запуске npm run dev
  },
  
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|jpg|svg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
      'postcss-loader']
      },
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      chunks: ['main'] // указываем, что должен быть подключен только скрипт main.js
    }),
    new HtmlWebpackPlugin({
      filename: 'product_page.html',
      template: './src/pages/product_page.html', 
      chunks: ['productPage'] // указываем, что должен быть подключен только скрипт classicPlus.js
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
    new CopyPlugin({
      patterns: [
        { from: "svg", to: "svg" }, // Копирование файлов из src/svg в dist/svg
      ],
    }),
    // использовали плагин
  ]  // добавьте массив

};