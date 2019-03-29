const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', () => {
  return gulp
    .src('public/images/raw/**/*')
    .pipe(
      imagemin([
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest('public/images'));
});
