var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('test', function() {
  console.log("IT'S WORKING!");
});

gulp.task('sass', function() {
  return gulp.src('./assets/sass/*.scss')
    .pipe(watch('./assets/sass/*'))
    .pipe(sass())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['*.html', './assets/sass/*.scss'], {cwd: '.'}, reload);
});

gulp.task('start', ['sass', 'serve']);
