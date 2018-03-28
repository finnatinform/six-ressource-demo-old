let gulp = require('gulp');
let webpack = require('webpack-stream');
let webpackConfiguration = require('./webpack.config');

gulp.task('default', defaultTask);

/**
 * Builds the software
 */
function defaultTask() {
    return gulp.src('./src')
        .pipe(webpack( webpackConfiguration ))
        .pipe(gulp.dest('dist'))
}