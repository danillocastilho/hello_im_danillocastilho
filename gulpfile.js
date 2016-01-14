var gulp            = require('gulp');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var plumber         = require('gulp-plumber');
var filter          = require('gulp-filter');
var autoprefixer    = require('gulp-autoprefixer');
var notify          = require('gulp-notify');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
var webserver       = require('gulp-webserver')
var wrap            = require('gulp-wrap')
var jshint          = require('gulp-jshint');
var declare         = require('gulp-declare')
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;
var config          = require('./gulp.config.json');

gulp.task('html', function() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./deploy/'))
});

gulp.task('php', function() {
  return gulp.src('./src/*.php')
    .pipe(gulp.dest('./deploy/'))
});

gulp.task('xml', function() {
  return gulp.src('./src/*.xml')
    .pipe(gulp.dest('./deploy/'))
});

gulp.task('txt', function() {
  return gulp.src('./src/*.txt')
    .pipe(gulp.dest('./deploy/'))
});

gulp.task('images', function() {
  return gulp.src('./src/assets/images/**/*')
    .pipe(gulp.dest('./deploy/assets/images/'))
});

gulp.task('fonts', function() {
  return gulp.src('./src/assets/fonts/**/*')
    .pipe(gulp.dest('./deploy/assets/fonts/'))
});

gulp.task('videos', function() {
  return gulp.src('./src/assets/videos/**/*')
    .pipe(gulp.dest('./deploy/assets/videos/'))
});

gulp.task('js', function() {
  return gulp.src('./src/js/app/**/*')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./deploy/js/'))
});

gulp.task('vendors', function() {
  return gulp.src('./src/js/vendors/**/*')
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./deploy/js/'))
});

gulp.task('sass', function() {
  return gulp.src("./src/scss/*.scss")
    .pipe(plumber({errorHandler: notify.onError("Erro no ARQUIVO <%= error.fileName.split('/').pop() %> LINHA <%= error.lineNumber %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({browsers: '> 5%'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./deploy/css/'))
    .pipe(filter('**/*.css'))
    .pipe(browserSync.stream());
});

gulp.task('cms', function() {
  return gulp.src('./src/cms/**/*')
  .pipe(gulp.dest('./deploy/cms'))
});

gulp.task('cms-reload', ['cms'], function() {
  setTimeout( function(){
    browserSync.reload();
  }, 1000 );
});

gulp.task('watch', function() {
  gulp.watch( './src/*.html', ['html'])
  gulp.watch( './src/*.php', ['php'])
  gulp.watch( './src/*.xml', ['xml'])
  gulp.watch( './src/*.txt', ['txt'])
  gulp.watch( './src/js/app/**/*', ['js'])
  gulp.watch( './src/js/vendors/**/*', ['vendors'])
  gulp.watch( './src/scss/**/*', ['sass'])
  gulp.watch( './src/cms/application/**/*', ['cms-reload'])

  gulp.watch("./deploy/*.html").on('change', reload);
  gulp.watch("./deploy/*.php").on('change', reload);
  gulp.watch("./deploy/js/*.js").on('change', reload);
});

gulp.task('serve', ['html', 'php', 'xml', 'txt', 'images', 'fonts', 'videos', 'js', 'vendors', 'sass', 'cms-reload', 'watch'], function (){
  var reload = browserSync.reload;
  browserSync.init({
    proxy: config.proxy
  });
})