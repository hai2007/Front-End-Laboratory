const pkg = JSON.parse(require('fs').readFileSync('./package.json'));

module.exports = {

    // 打包入口
    entry: './src/main.ts',

    // 打包出口
    output: 'build/main@v' + pkg.version + '.js',

    // 对导入路径重定向
    redirect: {
        'nefbl': "./src/lib/nefbl.js",
        "open-web-editor": "./src/lib/open-web-editor.js",
        'clunch': "./src/lib/clunch.js"
    },

    // 配置特殊文件解析loader
    loader: [{
        test: /\.clunch$/,
        handler: ['clunch/loader.js']
    }]
};
