/*global -$ */
'use strict';
// generated on 2015-03-11 using generator-gulp-webapp 0.3.0
// var glob = require("node-sass/node_modules/glob/glob");
var gulp = require('gulp');
var readline = require('readline');
var pngquant = require('imagemin-pngquant');
var fs = require('fs');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var replaceBuildBlock = require('gulp-replace-build-block');
var reload = browserSync.reload;

var buildAssetArray = ['form-account-info.html', 'home.html', 'car-prius-c.html', 'store-locator.html', 'contact-us-landing.html'];

var folders = {
  app: 'app',
  dist: 'dist',
  tmp: '.tmp',
  serverStyles: '../CMS/App_Themes/Toyota/styles',
  serverImages: '../CMS/App_Themes/Toyota/images',
  serverImageCars: '../CMS/Toyota/media/Cars',
  serverScripts: '../CMS/CMSScripts/Custom/Toyota',
  serverHtml: '../CMS/html',
};

var dependecyStyles = {
  'plugins-css.scss' : [
    'bower_components/owl-carousel2/dist/assets/owl.carousel.css',
    'bower_components/bootstrap-select/dist/css/bootstrap-select.css',
    'app/scripts/lib-js/fancybox/jquery.fancybox.css'
  ]
};

// Style Related ============================================================
// gulp.task("sass-css-import", function(cb) {
//   var styleDir = folders.app + '/styles/';
//   var cwd = process.cwd();
//   var importContent = "";
//   var cssContent = ""

//   // vendor JS to compile (get manifest of files to bring in)
//   fs.writeFileSync(styleDir + 'plugins-css.scss', '');
//   var windowEndlineChar = /^win/.test(process.platform) ? '\r\n' : '\n';

//   fs.exists(styleDir + 'plugins.sass', function(existsP) {
//     if (existsP) {
//       fs.readFileSync(styleDir + 'plugins.sass').toString().split(windowEndlineChar).forEach(function(line) {
//         var fileName = line.replace(/@import /g, '');
//         fs.exists(folders.app + '/' + fileName, function(exists) {
//           if (exists) {
//             fs.readFile(folders.app + '/' + fileName, "utf-8", function(err, _cssContent) {
//               if (err) {
//                 console.log("Error: " + err);
//                 return;
//               }
//               cssContent += _cssContent;
//               fs.appendFileSync(styleDir + 'plugins-css.scss', cssContent);
//             });
//           }
//         });
//       });
//     }
//   });

//   cb();
// });
gulp.task("sass-css-import", function() {
  for( var file in dependecyStyles){
    gulp.src(dependecyStyles[file])
    .pipe($.sass({
      errLogToConsole: true
    }))
    .pipe($.concat(file))
    .pipe(gulp.dest('app/styles'));
  }
});

gulp.task('styles', ['sass-css-import'], function() {
  return gulp.src([folders.app + '/styles/main.sass',
      folders.app + '/styles/car-detail.sass',
      folders.app + '/styles/vendor.sass',
      folders.app + '/styles/icon-to-server.sass'
    ], {
      base: folders.app + '/styles/'
    })
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      indentedSyntax: true,
      outputStyle: 'compressed', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer-core')({
        browsers: ['last 1 version', 'IE 9']
      })
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('styles-build', function() {
  var assets = $.useref.assets({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src('.tmp/step-1.html')
    .pipe(assets)
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('test-style'));

  //return gulp.src(folders.tmp+'/styles/*.css')
  //  .pipe(gulp.dest(folders.dist+'/styles'));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    //.pipe($.cache($.imagemin({
      //progressive: true,
      //interlaced: true,
    //// don't remove IDs from SVGs, they are often used
    //// as hooks for embedding and styling
      //use: [pngquant()],
      //svgoPlugins: [{cleanupIDs: false}]
    //})))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('images-min', function() {
 return gulp.src('app/images/**/*')
//    .pipe($.cache($.imagemin({
//      progressive: true,
//      interlaced: true,
//      // don't remove IDs from SVGs, they are often used
//      // as hooks for embedding and styling
//      svgoPlugins: [{
//        cleanupIDs: false
//      }]
//    })))
   .pipe(gulp.dest('dist/images'));
});

gulp.task('sprite', function() {
  // Generate our spritesheet
  var spriteData = gulp.src(folders.app + '/images/sprites/*.png').pipe($.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    cssFormat: 'css',
    cssOpts: {
      cssClass: function(item) {
        // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
        if (item.name.indexOf('-hover') !== -1) {
          return '.icon-' + item.name.replace('-hover', ':hover');
          // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
        } else {
          return '.icon-' + item.name;
        }
      }
    }
  }));

  // Pipe image stream through image optimizer and onto disk
  spriteData.img
    .pipe($.imagemin())
    .pipe(gulp.dest(folders.app + '/images/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  spriteData.css
    .pipe($.csso())
    .pipe(gulp.dest(folders.app + '/styles/'));
});

gulp.task('fonts', function() {
  return gulp.src(require('main-bower-files')({
      filter: '**/*.{eot,svg,ttf,woff,woff2}'
    }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

// End Style Related ============================================================



// Script Related ============================================================
gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js');
  // .pipe(reload({stream: false, once: false}));
  // .pipe($.jshint())
  // .pipe($.jshint.reporter('jshint-stylish'))
  // .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});
// End Script Related ============================================================




// Task for jade files page templates and component template
gulp.task('page-templates', function() {
  return gulp.src('./app/jade/*.jade')
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('.tmp/'));
});

// Template Related ============================================================
gulp.task('all-templates', function() {
  return gulp.src('./app/jade/*.jade')
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('.tmp/'));
});

gulp.task('html', ['all-templates', 'styles'], function() {
  var assets = $.useref.assets({
    searchPath: ['.tmp', 'app', '.']
  });
  var isBuildAssetList = function(file) {
    console.log(file.relative);
    return buildAssetArray.indexOf(file.relative) >= 0;
  };

  gulp.src('.tmp/*.html')
    .pipe($.ignore.include(isBuildAssetList))
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    //.pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));

  return gulp.src('.tmp/*.html')
    .pipe(replaceBuildBlock()).pipe(gulp.dest('dist'));
});
// End Template Related ============================================================

gulp.task('extras', function() {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('dist-asset-to-server', function() {
  gulp.src(folders.dist + "/styles/*.css").pipe(gulp.dest(folders.serverStyles));
  gulp.src(folders.dist + "/scripts/*.js").pipe(gulp.dest(folders.serverScripts));
//  gulp.src(folders.dist + "/images/**/*").pipe(gulp.dest(folders.serverImages));
//  gulp.src(folders.dist + "/images/Cars/**/*").pipe(gulp.dest(folders.serverImageCars));
  return gulp.src(folders.dist + "/**/*").pipe(gulp.dest(folders.serverHtml));
  return true;
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['all-templates', 'styles', 'fonts'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*',
    '.tmp/z.html'
  ]).on('change', reload);

  gulp.watch('app/jade/*.jade', ['page-templates']);
  gulp.watch('app/jade/*/*.jade', ['all-templates']);
  gulp.watch('app/styles/**/*.{sass,scss}', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// Init Project tasks
gulp.task('init-html-pages', function() {
  fs.readFile(folders.app + "/jade/pages-list.txt", "utf-8", function(err, _data) {
    if (err) {
      console.log("Error: " + err);
      return;
    }
    var filenames = _data.split('\n');

    for (var i = 0; i < filenames.length; i++) {
      if (filenames[i] !== "") {
        gulp.src(folders.app + "/jade/base-page.jade").pipe($.rename(filenames[i])).pipe(gulp.dest(folders.app + "/jade"));
        console.log("Created file: " + folders.app + "/jade/" + filenames[i]);
      }
    }
  });
});

// inject bower components
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass-official'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['jshint', 'html', 'images-min', 'fonts', 'extras'], function() {
  gulp.start('dist-asset-to-server');
  return gulp.src('dist/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});