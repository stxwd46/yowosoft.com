/**
 * 项目总配置文件
 * @author ElegantXu
 */
var path = require('path');

// path related
var rootPath = __dirname;

var distPath = path.resolve(rootPath, 'dist');

var mobileDistPath = path.resolve(distPath, 'm');
var pcDistPath = path.resolve(distPath, 'p');


var srcPath = path.resolve(__dirname, 'src');

exports.rootPath = rootPath;
exports.distPath = distPath;
exports.pcDistPath = pcDistPath;
exports.mobileDistPath = mobileDistPath;
exports.srcPath = srcPath;