module.exports = function(grunt) {

    var path = require('path');

    var ccCore = require('cc.core');
    var pkg = grunt.file.readJSON('package.json');

    var srcPath = 'src/';
    // 没有压缩的脚本文件

    var srcStylePath = path.resolve(srcPath, 'style');
    var srcScriptPath = path.resolve(srcPath, 'script');

    var distPath = path.resolve(ccCore.config.pcDistPath, pkg.name);
    var distStylePath = path.resolve(distPath, 'style');
    var distScriptPath = path.resolve(distPath, 'script');

    var tasks = ['copy', 'htmlmin', 'uglify', 'stylus'];

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    // 复制html文件
                    {
                        expand: true,
                        cwd: srcPath,
                        src: ['*.html'],
                        dest: distPath
                    }
                ]
            },
            tmpl: {
                files: [
                    // 复制html文件
                    {
                        expand: true,
                        cwd: srcPath,
                        src: ['tmpl/*.html'],
                        dest: distPath
                    }
                ]
            },
            script: {
                files: [
                    // 复制js文件
                    {
                        src: path.resolve(srcScriptPath, 'main.js'),
                        dest: path.resolve(distScriptPath, 'js-packed.js')
                    }
                ]
            },
            font: {
                files: [
                    // 复制字体文件
                    {
                        expand: true,
                        cwd: srcPath,
                        src: ['font/**'],
                        dest: distPath
                    }
                ]
            },
            images: {
                files: [
                    // 复制图片
                    {
                        expand: true,
                        cwd: srcPath,
                        src: ['images/**'],
                        dest: distPath
                    }
                ]
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
            },
            main: {
                src: srcPath + 'index.html',
                dest: distPath + '/index.html'
            }
        },
        stylus: {
            main: {
                src: path.resolve(srcStylePath, 'main.styl'),
                dest: path.resolve(distStylePath, 'css-packed.css'),
                options: {
                    import: ['nib']
                }
            }
        },
        uglify: {
            script: {
                src: path.resolve(distScriptPath, 'js-packed.js'),
                dest: path.resolve(distScriptPath, 'js-packed.js')
            }
        },
        watch: {
            main: {
                files: [srcPath + '/**'],
                tasks: tasks
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', function() {
        grunt.task.run(tasks);
    });

    grunt.registerTask('w', function() {
        grunt.task.run('watch');
    });
};