/*global -$ */
'use strict';
// generated on 2015-03-11 using generator-gulp-webapp 0.3.0
var gulp              = require('gulp'),
    browserSync       = require('browser-sync'),
    $                 = require('gulp-load-plugins')(),
    reload            = browserSync.reload;

var buildAssetArray = [
  'home.html'
];

var folders = {
  app: 'app',
  dist: 'dist',
  serverStyles: '../CMS/App_Themes/Toyota/styles',
  serverImages: '../CMS/App_Themes/Toyota/images',
  serverImageCars: '../CMS/Toyota/media/Cars',
  serverScripts: '../CMS/CMSScripts/Custom/Toyota'
};

// Style Related ============================================================
gulp.task('styles', function () {
  return gulp.src(folders.app+'/sass/main.sass')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      indentedSyntax: true,
      outputStyle: 'nested', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version', 'IE 9']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('app/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('font-gen', function(){
  return gulp.src(folders.app+'/fonts/*.{otf,ttf}').pipe($.fontGen({
      dest: "./fonts/"
  }))
});

gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**/*'])
    .pipe(gulp.dest('dist/fonts'));
});

// End Style Related ============================================================


// Script Related ============================================================
gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});
// End Script Related ============================================================

gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['dist']));

gulp.task('serve', ['styles', 'fonts'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['app']
    }
  });

  // watch for changes
  // gulp.watch([
  //   'app/**/*.js',
  //   'app/**/*.css',
  //   'app/**/*.html',
  //   'app/assets/admin/layout3/css/*.css'
  // ]).on('change', reload);

  // gulp.watch('app/sass/**/*.sass', ['styles']);
  // gulp.watch('app/fonts/**/*', ['fonts']);
});

gulp.task('build', ['jshint', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
