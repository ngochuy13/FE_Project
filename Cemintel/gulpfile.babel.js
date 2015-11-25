// generated on 2015-09-17 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('views', function () {
  return gulp.src('app/*.jade')
    .pipe($.jade({pretty: true}))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({stream: true}));
});

//custom gulp build
//css
gulp.task('vendor-css', function() {
    gulp.src([
      'bower_components/swiper/dist/idangerous.swiper.css',
      'bower_components/animate/index.css',
      'bower_components/PaW-Carousel/public/css/otherstyles.css',
      'bower_components/PaW-Carousel/public/css/pawcarousel.css',
      'bower_components/slick-carousel/slick/slick.css',
      'bower_components/slick-carousel/slick/slick-theme.css'
    ])
        .pipe(sass())
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('sass', function() {
    gulp.src([
      'bower_components/swiper/dist/idangerous.swiper.css',
      'bower_components/animate/index.css',
      'bower_components/PaW-Carousel/public/css/otherstyles.css',
      'bower_components/PaW-Carousel/public/css/pawcarousel.css',
      'bower_components/slick-carousel/slick/slick.css',
      'bower_components/slick-carousel/slick/slick-theme.css',
      'app/styles/*.scss'
    ])
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/styles'));
});

// Main script
gulp.task('main-js', function() {
    return gulp
        .src([
            'app/scripts/main.js',
            'app/scripts/fire.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/scripts'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify({
            message: 'Main - Scripts task complete'
        }))
});

// Plugins script
gulp.task('vendor-js', function() {
    return gulp
        .src([
          // 'app/scripts/gmap.js',
          'bower_components/jquery/dist/jquery.js',
          'bower_components/PaW-Carousel/public/js/pawcarousel.jquery.js',
          'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
          'bower_components/Swiper/dist/idangerous.swiper.min.js',
          'bower_components/PaW-Carousel/public/js/pawcarousel.jquery.min.js',
          'bower_components/jQuery.dotdotdot/src/js/jquery.dotdotdot.min.js',
          'bower_components/isotope/dist/isotope.pkgd.min.js',
          'bower_components/jquery-validation/dist/jquery.validate.min.js',
          'bower_components/slick-carousel/slick/slick.min.js',
          'bower_components/jquery-file-download/src/Scripts/jquery.fileDownload.js',
          'bower_components/jquery.nicescroll/jquery.nicescroll.min.js'
          // 'bower_components/js-rich-marker/src/richmarker.js',
          // 'bower_components/js-rich-marker/src/richmarker-compiled.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify({
            message: 'Vendor - Scripts task complete'
        }))

});

// modernizr js
gulp.task('modernizr-js', function() {
    return gulp
        .src([
          'bower_components/modernizr/modernizr.js'
        ])
        .pipe(concat('modernizr.js'))
        .pipe(gulp.dest('dist/scripts/vendor'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/vendor'))
        .pipe(notify({
            message: 'modernizr - Scripts task complete'
        }))

});

gulp.task('html', ['views', 'styles'], () => {
  const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  // return gulp.src('app/*.html')
  // return gulp.src(['.tmp/*.html'])
  return gulp.src(['app/*.html', '.tmp/*.html'])
    // .pipe(assets)
    // .pipe($.if('*.js', $.uglify()))
    // .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    // .pipe(assets.restore())
    .pipe($.useref())
    // .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

// gulp.task('dev', ['views', 'styles'], () => {
//   const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

//   // return gulp.src('app/*.html')
//   return gulp.src(['.tmp/*.html'])
//     .pipe(assets)
//     .pipe(assets.restore())
//     .pipe($.useref())
//     // .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/*.jade'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['views', 'styles'], () => {
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

  gulp.watch([
    'app/*.html',
    '.tmp/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);
  gulp.watch('app/**/*.jade', ['views']);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  // gulp.src('app/*.html')
  gulp.src('app/layouts/*.jade')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

// gulp.task('build', ['html', 'fonts', 'extras'], () => {
gulp.task('build', ['views', 'images', 'html', 'vendor-js', 'modernizr-js', 'main-js', 'sass', 'vendor-css', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
