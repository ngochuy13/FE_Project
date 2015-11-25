// Generated on 2014-10-27 using generator-jade 0.8.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // configurable paths
  var folders = {
    app: 'app',
    dist: 'dist',
    tmp: '.tmp',
    distServerSideImgCSS: '../CMS/App_Themes/BluePool/',
    distServerSideScripts: '../CMS/CMSScripts/BluePool/'
  };

  grunt.initConfig({
    folders: folders,
    watch: {
      sass: {
        files: ['<%= folders.app %>/styles/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer']
      },
      server: {
        options: {
          livereload: true
        },
        files: [
          '<%= folders.tmp %>/*.html',
          '<%= folders.tmp %>/styles/{,*/}*.css',
          '{.tmp,<%= folders.app %>}/scripts/{,*/}*.js',
          '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      jade: {
        files: '<%= folders.app %>/jade/**/*.jade',
        tasks: ['jade']
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        //hostname: '0.0.0.0',
        livereload: true
      },
      server: {
        options: {
          open: true,
          base: [
            '<%= folders.tmp %>',
            '<%= folders.app %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '<%= folders.tmp %>',
            'test',
            '<%= folders.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= folders.dist %>'
          ],
          livereload: false
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= folders.tmp %>',
            '<%= folders.dist %>/*',
            '!<%= folders.dist %>/.git*'
          ]
        }]
      },
      server: '<%= folders.tmp %>'
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },
    sass: {
      options: {
        sourceMap: false
      },
      server: {
        files: {
          '<%= folders.tmp %>/styles/main.css': '<%= folders.app %>/styles/main.{scss,sass}'
        }
      },
      dist: {
        files: {
            '<%= folders.dist %>/styles/main.css': '<%= folders.app %>/styles/main.{scss,sass}'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= folders.tmp %>/styles',
          dest: '<%= folders.tmp %>/styles',
          src: '{,*/}*.css'
        }]
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true,
          basedir: '<%= folders.app %>/jade',
          data: function(dest, src) {

            var page = src[0].replace(/app\/jade\/(.*)\/index.jade/, '$1');

            if (page == src[0]) {
              page = 'index';
            }

            return {
              page: page
            };
          }
        },
        files: [{
          expand: true,
          cwd: '<%= folders.app %>/jade',
          src: ['*.jade'],
          dest: '.tmp/',
          ext: '.html'
        }]
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= folders.dist %>/scripts/{,*/}*.js',
            '<%= folders.dist %>/styles/{,*/}*.css',
            '<%= folders.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= folders.dist %>/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      dist:{
        src: ['<%= folders.tmp %>/index.html', '<%= folders.tmp %>/libraries.html', '<%= folders.tmp %>/sales-info.html', '<%= folders.tmp %>/the-gallery.html', '<%= folders.tmp %>/the-house.html']
      },
      options: {
        dest: '<%= folders.dist %>'
      }
    },
    usemin: {
      html: ['<%= folders.dist %>/{,*/}*.html'],
      css: ['<%= folders.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= folders.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= folders.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= folders.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= folders.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= folders.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= folders.dist %>/styles/main.css': [
            '<%= folders.tmp %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/folders/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= folders.tmp %>',
          src: '{,*/}*.html',
          dest: '<%= folders.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= folders.app %>',
          dest: '<%= folders.dist %>',
          src: [
            '*.{ico,txt}',
            '.htaccess',
            'images/**',
            'fonts/*'
          ]
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: '<%= folders.app %>',
          dest: '<%= folders.tmp %>',
          src: [
            'scripts/{,*/}*js', 'bower_components/**/*js'
          ]
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: '<%= folders.app %>',
          dest: '<%= folders.tmp %>',
          src: [
            'styles/{,*/}*css'
          ]
        }]
      },
      assets: {
        files: [{
          expand: true,
          cwd: '<%= folders.app %>',
          dest: '<%= folders.dist %>',
          src: [
            'assets/{,*/}*.*'
          ]
        }]
      },
      distServerSideImgCSS: {
        files: [{
          expand: true,
          cwd: '<%= folders.dist %>',
          dest: '<%= folders.distServerSideImgCSS %>',
          src: [
            'images/**',
            'fonts/*',
            'styles/*',
            'bootstrap/*'
          ]
        }]
      },
      distServerSideScripts: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= folders.dist %>/scripts',
          dest: '<%= folders.distServerSideScripts %>',
          src: [
            '*'
          ]
        }]
      }
    },
    concurrent: {
      server: [
        'sass:server'
      ],
      test: [
        'sass'
      ],
      dist: [
        'sass:dist',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    release: {
      options: {
        npm: false
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['<%= folders.app %>/scripts/**/*js']
    }
  });

  function concatCSS(){
    var windowEndlineChar = /^win/.test(process.platform) ? '\r\n' : '\n';
    grunt.log.write( 'Dependencies CSS files concatenation: \n');
    var styleDir = folders.app+'/styles/';
    var content = grunt.file.read( styleDir+'plugins.sass').toString();

    content = content.replace(/@import /g,'').replace(/\.\.\//g,'').split(windowEndlineChar);
    var cssContent = "";
    for(var i=0; i<content.length; i++){
      if(grunt.file.isFile( folders.app+'/'+content[i] )){
        grunt.log.write( 'File: '+folders.app+'/'+content[i]+'\n');
        cssContent += grunt.file.read( folders.app+'/'+content[i] ).toString();
      }
    }
    grunt.log.write( '\ninto styles/plugins-css.scss file.\n');
    grunt.file.delete(styleDir+'plugins-css.scss');
    grunt.file.write(styleDir+'plugins-css.scss', cssContent);
  }

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }
    concatCSS();
    grunt.task.run([
      'clean:server',
      'jade',
      'concurrent:server',
      'autoprefixer',
      'connect:server',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', function(target){
    concatCSS();
    grunt.task.run([
      'clean:dist',
      'jade',
      'copy:js',
      'copy:css',
      'useminPrepare',
      'concurrent:dist',
      'autoprefixer',
      'concat',
      'cssmin:dist',
      'uglify',
      'copy:dist',
      'copy:assets',
      'usemin',
      'copy:distServerSideImgCSS',
      'copy:distServerSideScripts'
    ]);
  });

  grunt.registerTask('default', [
    'jshint',
    'build'
  ]);
};
