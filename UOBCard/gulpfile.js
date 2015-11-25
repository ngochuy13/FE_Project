/*global -$ */
'use strict';
// generated on 2015-04-24 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('styles', function() {
    return gulp.src(['app/styles/main.scss', 'app/styles/card-register-uni.scss', 'app/styles/card-register-separated.scss'])
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'nested', // libsass doesn't support expanded yet
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        // .pipe($.postcss([
        //     require('autoprefixer-core')({
        //         browsers: ['last 1 version']
        //     })
        // ]))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/main.js')
        .pipe(reload({
            stream: true,
            once: true
        }))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('sass', function() {
    gulp.src([
        'app/styles/main.scss'

    ])
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('html', ['styles'], function() {
    var assets = $.useref.assets({
        searchPath: ['.tmp', 'app', '.']
    });

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', $.csso()))
        .pipe(assets.restore())
        .pipe($.useref())
        //.pipe($.if('*.html', $.minifyHtml({
        //conditionals: true,
        //loose: true
        //})))
        .pipe(gulp.dest('dist'));
});

gulp.task('html-build', ['styles'], function() {
    var assets = $.useref.assets({
        searchPath: ['.tmp', 'app', '.']
    });

    return gulp.src('app/*.html')
        // .pipe(assets)
        // .pipe($.if('*.js', $.uglify()))
        // .pipe($.if('*.css', $.csso()))
        // .pipe(assets.restore())
        .pipe($.useref())
        //.pipe($.if('*.html', $.minifyHtml({
        //conditionals: true,
        //loose: true
        //})))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true,
            // don't remove IDs from SVGs, they are often used
            // as hooks for embedding and styling
            svgoPlugins: [{
                cleanupIDs: false
            }]
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('copyvendors', function() {
    gulp.src('app/vendors/**/*')
        .pipe(gulp.dest('dist/vendors'));
});

gulp.task('fonts', function() {
    return gulp.src(require('main-bower-files')({
            filter: '**/*.{eot,svg,ttf,woff,woff2}'
        }).concat('app/fonts/**/*'))
        .pipe(gulp.dest('.tmp/fonts'))
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function() {
    return gulp.src([
        'app/*.*',
        '!app/*.html'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'fonts'], function() {
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
        'app/*.html',
        'app/scripts/**/*.js',
        'app/images/**/*',
        '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// Main script
gulp.task('main-js', function() {
  return gulp
    .src([
      'app/scripts/main.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({
      message: 'Main - Scripts task complete'
    }))

});

// Plugins script
gulp.task('vendor-js', function() {
  return gulp
    .src([
      'app/vendors/jquery-1.11.3.min.js',
      'app/vendors/bootstrap.min.js',
      'app/vendors/jquery.sticky.js',
      'app/vendors/idangerous.swiper.min.js',
      'app/vendors/jquery.nouislider.all.min.js'
    ])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(gulp.dest('dist/scripts'))

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
            ignorePath: /^(\.\.\/)*\.\./
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('build', ['html', 'copyvendors', 'extras'], function() {
    return gulp.src('dist/**/*').pipe($.size({
        title: 'build',
        gzip: true
    }));
});

gulp.task('deploy', ['html-build', 'sass','main-js', 'vendor-js' ,'copyvendors'], function() {
  return gulp.src('dist/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
