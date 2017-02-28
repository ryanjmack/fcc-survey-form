var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-clean-css');


gulp.task('minify-css', function() {
  gulp.src(['css/normalize.css', 'css/master.css'])
      .pipe(minify())
      .pipe(gulp.dest('css/minified'))
});


gulp.task("concat-css", function() {
  gulp.src(['css/minified/normalize.css', 'css/minified/master.css'])
      .pipe(concat('minify.css'))
      .pipe(gulp.dest('css/minified'));
})
