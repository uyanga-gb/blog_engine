const path = require("path")
const express = require("express")
const webpack = require("webpack")
const webpackConfig = require("./webpack.config.js")
const axios = require("axios")
const app = express()
const port = process.env.PORT || 9000

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
})
const compiler = webpack(webpackConfig)
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  })
)
app.use(require("webpack-hot-middleware")(compiler))
app.use(express.static(path.resolve(__dirname, "dist")))
