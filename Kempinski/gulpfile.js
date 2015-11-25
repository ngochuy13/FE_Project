/*global -$ */
'use strict';
// generated on 2015-03-11 using generator-gulp-webapp 0.3.0
var gulp              = require('gulp'),
    //pngquant          = require('imagemin-pngquant'),
    fs                = require('fs'),
    browserSync       = require('browser-sync'),
    replaceBuildBlock = require('gulp-replace-build-block'),
    $                 = require('gulp-load-plugins')(),
    reload            = browserSync.reload,
    rtlcss            = require('gulp-rtlcss'),
    rename            = require('gulp-rename');

var buildAssetArray = [
  'index.html'
];

var dependecyStyles = {
  'vendors.css' : [
    'bower_components/fontawesome/css/font-awesome.css',
    'bower_components/photoswipe/dist/photoswipe.css',
    'bower_components/owl-carousel2/src/css/owl.carousel.css',
    'bower_components/bootstrap-select/dist/css/bootstrap-select.css',
    'bower_components/bootstrap-daterangepicker/daterangepicker.css'
  ]
};

var folders = {
  app: 'app',
  dist: 'dist',
  tmp: '.tmp',
  isRTL: false,
  distSvrImg: '//192.168.1.253/src-polish/Kempinski.Umbraco.Web/images',
  distSvrScripts: '//192.168.1.253/src-polish/Kempinski.Umbraco.Web/Scripts',
  distSvrStyles: '//192.168.1.253/src-polish/Kempinski.Umbraco.Web/css',
};

// Style Related ============================================================
gulp.task("sass-css-import", function() {
  for( var file in dependecyStyles){
    gulp.src(dependecyStyles[file])
    // .pipe($.sass())
    .pipe($.concat(file))
    .pipe(gulp.dest(folders.tmp+'/styles'));
  }
});

gulp.task('styles', ["sass-css-import"], function () {
  return gulp.src(folders.app+'/styles/{main,fontface,custom-rtl}.sass')
    // .pipe($.sourcemaps.init())
    .pipe($.sass({
      indentedSyntax: true,
      outputStyle: 'compressed', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version', 'IE 9']})
    ]))
    //.pipe($.sourcemaps.write())
    .pipe(gulp.dest(folders.tmp+'/styles'))
    .pipe(reload({stream: true}));

  // convert css ltr to rtl
  // if(folders.isRTL){
  //   return gulp.start('convertRTL');
  // }else{
  //   return reload({stream: true});
  // }
});

gulp.task('styles-watch', ['styles' , 'page-templates'], function(){
  console.log('all page-templates task done compiled completely');
  reload();
});

gulp.task('criticalStyles', function () {

  return gulp.src(folders.app+'/styles/critical/*.sass')
    .pipe($.sass({
      indentedSyntax: true,
      outputStyle: 'compressed', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version', 'IE 9']})
    ]))
    .pipe(gulp.dest(folders.tmp+'/styles'))
    .pipe(reload({stream: true}));

  // convert css ltr to rtl
  // if(folders.isRTL){
  //   return gulp.start('convertRTL');
  // }else{
  //   return reload({stream: true});
  // }
});

gulp.task('images', function () {
  return gulp.src(folders.app+'/images/**/*')
//    .pipe($.cache($.imagemin({
//      progressive: true,
//      interlaced: true,
//      // don't remove IDs from SVGs, they are often used
//      // as hooks for embedding and styling
//      svgoPlugins: [{cleanupIDs: false}]
//    })))
    .pipe(gulp.dest(folders.dist+'/images'));
});

//gulp.task('sprite', function () {
//  // Generate our spritesheet
//  var spriteData = gulp.src(folders.app+'/images/sprites/*.png').pipe($.spritesmith({
//    imgName: 'sprite.png',
//    cssName: 'sprite.scss',
//    cssFormat: 'css',
//    cssOpts: {
//      cssClass: function (item) {
//        // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
//        if (item.name.indexOf('-hover') !== -1) {
//          return '.icon-' + item.name.replace('-hover', ':hover');
//          // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
//        } else {
//          return '.icon-' + item.name;
//        }
//      }
//    }
//  }));
//
//  // Pipe image stream through image optimizer and onto disk
//  spriteData.img
//    .pipe($.imagemin())
//    .pipe(gulp.dest(folders.app+'/images/'));
//
//  // Pipe CSS stream through CSS optimizer and onto disk
//  spriteData.css
//    .pipe($.csso())
//    .pipe(gulp.dest(folders.app+'/styles/'));
//});

gulp.task('fonts', function () {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat(folders.app+'/fonts/**/*'))
    .pipe(gulp.dest(folders.tmp+'/fonts'))
    .pipe(gulp.dest(folders.dist+'/fonts'));
});

// End Style Related ============================================================



// Script Related ============================================================
gulp.task('jshint', function () {
  return gulp.src(folders.app+'/scripts/**/*.js')
    // .pipe(reload({stream: true, once: true}))
    // .pipe($.jshint())
    // .pipe($.jshint.reporter('jshint-stylish'))
    // .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});
// End Script Related ============================================================






// Template Related ============================================================
gulp.task('all-templates', ['criticalStyles'], function() {
  return gulp.src(folders.app+'/jade/*.jade')
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest(folders.tmp));
});

gulp.task('all-templates-watch', ['all-templates'], function(){
  console.log('all page-templates task done compiled completely');
  reload();
});

// Task for jade files page templates and component template
gulp.task('page-templates', ['criticalStyles'], function() {
  return gulp.src(folders.app+'/jade/*.jade')
    .pipe($.changed(folders.tmp, {extension: '.html'}))
    .pipe($.jade())
    .pipe(gulp.dest(folders.tmp));
});

gulp.task('page-templates-watch', ['page-templates'], function(){
  console.log('page-templates task done compiled completely');
  reload();
});

gulp.task('html', ['all-templates', 'styles'], function() {
  var assets = $.useref.assets({
    searchPath: [folders.tmp, folders.app, '.']
  });
  var isBuildAssetList = function(file) {
    console.log(file.relative);
    return buildAssetArray.indexOf(file.relative) >= 0;
  };

  gulp.src(folders.tmp+'/*.html')
    .pipe($.ignore.include(isBuildAssetList))
    .pipe(assets)
    //.pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    //.pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest(folders.dist));

  return gulp.src(folders.app+'/*.html')
    .pipe(replaceBuildBlock()).pipe(gulp.dest(folders.dist));
});

// End Template Related ============================================================

gulp.task('extras', function () {
  return gulp.src([
    folders.app+'/*.*',
    '!'+folders.app+'/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest(folders.dist));
});

gulp.task('clean', require('del').bind(null, [folders.tmp, folders.dist]));

gulp.task('serve', ['all-templates', 'styles', 'fonts'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [folders.tmp, folders.app],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  // watch for changes
  //gulp.watch([
    //folders.app+'/images/**/*',
    //folders.tmp+'/fonts/**/*'
  //]).on('change', reload);

  gulp.watch(folders.app+'/scripts/**/*.js', ['serve-js']);
  gulp.watch(folders.app+'/jade/*.jade', ['page-templates-watch']);
  gulp.watch(folders.app+'/jade/*/*.jade', ['all-templates-watch']);
  gulp.watch([folders.app+'/styles/components/*.{sass,scss}', folders.app+'/styles/*.{sass,scss}', '!'+folders.app+'/styles/**/{header,section-title,structure}.{sass,scss}'], ['styles']);
  // gulp.watch(folders.app+'/fonts/**/*', ['fonts']);

  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src(folders.app+'/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest(folders.app+'/styles'));

  gulp.src(folders.app+'/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass-official'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest(folders.app));
});

gulp.task('styles-build', ['sass-css-import'], function () {
  return gulp.src(folders.app+'/styles/{main,fontface,custom-rtl}.sass')
    .pipe($.sass({
      indentedSyntax: true,
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version', 'IE 9']})
    ]))
    .pipe(gulp.dest(folders.dist+'/styles'))
    .pipe(reload({stream: true}));
});
gulp.task('html-build', ['all-templates', 'styles-build'], function() {
  return gulp.src('.tmp/*.html')
    .pipe(replaceBuildBlock()).pipe(gulp.dest(folders.dist));
});


gulp.task('build', [ 'all-templates', 'styles-build', 'images', 'fonts', 'extras'], function () {

  var assets = $.useref.assets({
    searchPath: [folders.tmp, folders.app, '.']
  });
  var isBuildAssetList = function(file) {
    console.log(file.relative);
    return buildAssetArray.indexOf(file.relative) >= 0;
  };

  gulp.src(folders.tmp+'/*.html')
    .pipe($.ignore.include(isBuildAssetList))
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe(assets.restore())
    .pipe($.useref())
    //.pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest(folders.dist));
  //return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
  
  return gulp.src(folders.tmp+'/*.html')
    .pipe(replaceBuildBlock()).pipe(gulp.dest(folders.dist));
});

gulp.task('dist-asset-to-server', function() {
  gulp.src(folders.dist + "/styles/*.css").pipe(gulp.dest(folders.distSvrStyles));
  gulp.src(folders.dist + "/scripts/*.js").pipe(gulp.dest(folders.distSvrScripts));
  //gulp.src(folders.dist + "/images/**/*").pipe(gulp.dest(folders.distSvrImg));
  // gulp.src(folders.dist + "/images/Cars/**/*").pipe(gulp.dest(folders.serverImageCars));
  return true;
});


gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('convertRTL', function () {
    return gulp.src(["!"+folders.tmp+'/styles/*-rtl.css', folders.tmp+'/styles/*.css'])
        .pipe(rtlcss())
        .pipe(rename({ suffix: '-rtl' }))
        .pipe(gulp.dest(folders.tmp+'/styles'))
        .pipe(reload({stream: true}));
});

gulp.task('build-rtl', function () {
  folders.dist = 'dist-rtl';
  folders.isRTL = true;
  gulp.start('build');
  return true;
});

gulp.task('build-booking', function () {
  folders.app = 'app-booking';
  folders.dist = 'dist-booking';
  gulp.start('build');
  return true;
});

gulp.task('serve-rtl', function () {
  folders.dist = 'dist-rtl';
  folders.isRTL = true;
  gulp.start('serve');

  gulp.watch(["!"+folders.tmp+'/styles/*-rtl.css', folders.tmp+'/styles/*.css'], ['convertRTL']);

  return true;
});

gulp.task('serve-b', function () {
  folders.dist = 'dist-booking';
  folders.app = 'app-booking';
  gulp.start('serve');

  return true;
});

gulp.task('serve-js', function () {
  var assets = $.useref.assets({
    searchPath: [folders.app, '.']
  });

  gulp.src(folders.tmp+'/index.html')
    .pipe(assets)
    .pipe($.useref())
    .pipe(gulp.dest('.tmp'));

  reload();
});
