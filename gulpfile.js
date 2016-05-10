var fs              = require('fs')
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
var config          = require('./gulp.config.json');
var browserify      = require('browserify');
var jstify          = require('jstify')

var PATHS           = [
                        {src:'./src/*.*', watch:'pages-watch'},
                        {src:'./src/assets/**/*', watch:'assets-watch'},
                        {src:'./src/js/application/**/*', watch:'scripts-watch'},
                        {src:'./src/js/vendors/**/*', watch:'vendors-watch'},
                        {src:'./src/scss/*.scss', watch:'sass-watch'}
                      ];

var run = function () {
  gulp.start(this.watch);
}

gulp.task('pages', function() {
  return gulp.src('./src/*.*')
    .pipe(gulp.dest('./deploy/'))
});
gulp.task('pages-watch', ['pages'], browserSync.reload);

gulp.task('assets', function() {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./deploy/assets/'))
});
gulp.task('assets-watch', ['assets'], browserSync.reload);

gulp.task('scripts', function() {
  // return gulp.src('./src/js/application/**/*')
  //   .pipe(concat('main.js'))
  //   .pipe(uglify())
  //   .pipe(gulp.dest('./deploy/js/'))
  
  var b = browserify()
  b.transform({
    global: true
  }, 'uglifyify')
  
  return b.add('./src/js/main.js')
    .transform('jstify')
    .bundle(function(err, app) {
      fs.writeFile('./deploy/js/main.js', app);
    });
});
gulp.task('scripts-watch', ['scripts'], browserSync.reload);

gulp.task('vendors', function() {
  return gulp.src('./src/js/vendors/**/*')
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./deploy/js/'))
});
gulp.task('vendors-watch', ['vendors'], browserSync.reload);

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
gulp.task('sass-watch', ['sass']);

gulp.task('watch', function() {
  for ( var i = 0; i < PATHS.length; i++ ) {
    var path = PATHS[i];
    gulp.watch(path.src).on('change', run.bind(path));
    gulp.watch(path.src).on('add', run.bind(path));
    gulp.watch(path.src).on('unlink', run.bind(path));
  }
});

gulp.task('serve', ['pages', 'assets', 'scripts', 'vendors', 'sass', 'watch'], function (){
  browserSync.init({
    proxy: config.proxy
  });
})