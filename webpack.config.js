module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 9091,
    sockPort: 9090,
    sockPath: `/sub-folder/sockjs-node`,
    publicPath: `http://localhost:9090/sub-folder/`,
    historyApiFallback: true,
  },
};