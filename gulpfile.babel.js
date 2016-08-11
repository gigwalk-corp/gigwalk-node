// @flow
import gulp from 'gulp';
import rename from 'gulp-rename';

gulp.task('default', () =>
    gulp.src('./src/**/*.js', { base: 'src' })
        .pipe(rename({ extname: '.js.flow' }))
        .pipe(gulp.dest('./lib'))
);
