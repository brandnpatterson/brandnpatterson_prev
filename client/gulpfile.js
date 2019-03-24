const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () => {
  return gulp
    .src('public/images/raw/**/*')
    .pipe(
      imagemin([
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 5
        })
      ])
    )
    .pipe(gulp.dest('public/images'));
});
