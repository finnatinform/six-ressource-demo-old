let gulp = require('gulp');
let gulpCopy = require('gulp-copy');
let webpack = require('webpack-stream');
let del = require('del');

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

    deployDesktop();
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

function deployDesktop(){
    return gulp.src([ './views/desktop.html' , './dist/application.js' , './dist/application.js.map' , './data/simple.json' ])
               .pipe( gulpCopy( './dist/public' , { prefix : 1 } ) )
            //    .pipe( del( ['./dist/application.js'] ) );
}