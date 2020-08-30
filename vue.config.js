module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8089/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}