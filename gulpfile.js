let gulp = require('gulp');
let webpack = require('webpack-stream');
let webpackClientConfiguration = require('./webpack.client.config');
let webpackServerConfiguration = require('./webpack.server.config');

gulp.task('default', defaultTask);
gulp.task('buildClient', buildClient);
gulp.task('buildServer', buildServer);

/**
 * Builds the software
 */
function defaultTask() {
    buildClient();
    buildServer();
}

function buildServer(){
    return gulp.src('./src')
        .pipe(webpack( webpackServerConfiguration ))
        .pipe(gulp.dest('dist'))
}

function buildClient(){
    return gulp.src('./src')
        .pipe(webpack( webpackClientConfiguration ))
        .pipe(gulp.dest('dist'))
}