let gulp = require('gulp');
let gulpCopy = require('gulp-copy');
let webpack = require('webpack-stream');
let del = require('del');
let cordova = require('cordova-lib').cordova;
let jest = require('gulp-jest').default;

let webpackClientConfiguration = require('./webpack.client.config');
let webpackServerConfiguration = require('./webpack.server.config');
let webpackStarterConfiguration = require('./webpack.starter.config');
let webpackStarterApplicationConfiguration = require('./webpack.starter.application.config');
let jestConfiguration = require('./jest.config');

gulp.task('default', defaultTask);
gulp.task('buildClient', buildClient);
gulp.task('buildServer', buildServer);

/**
 * Builds the software
 */
function defaultTask(_Done) {
    // return gulp.src('./src').pipe(jest(jestConfiguration));
    buildClient()
        .then(buildStarterApplication)
        .then(buildStarter)
        .then(deployStarter)
        // .then(buildServer)
        // .then(deployDesktop)
        .then(function () {
            _Done();
        });
}

function buildServer() {
    return new Promise(function (_Resolve, _Reject) {
        gulp.src('./src')
            .pipe(webpack(webpackServerConfiguration))
            .on('error', _Reject)
            .pipe(gulp.dest('./dist'))
            .on('end', _Resolve)
    });
}

// quasi prebuild
function buildClient() {
    return new Promise(function (_Resolve, _Reject) {
        gulp.src('./src')
            .pipe(webpack(webpackClientConfiguration))
            .on('error', _Reject)
            .pipe(gulp.dest('./dist'))
            .on('end', _Resolve)
    });
}

function buildStarter() {
    return new Promise(function (_Resolve, _Reject) {
        gulp.src('./src')
            .pipe(webpack(webpackStarterConfiguration))
            .on('error', _Reject)
            .pipe(gulp.dest('./dist'))
            .on('end', _Resolve)
    });
}

function buildStarterApplication(){
    return new Promise(function (_Resolve, _Reject) {
        gulp.src('./src')
            .pipe(webpack(webpackStarterApplicationConfiguration))
            .on('error', _Reject)
            .pipe(gulp.dest('./dist'))
            .on('end', _Resolve)
    });
}

function prepareMobile() {
    return new Promise(function (_Resolve, _Reject) {
        gulp.src(['./views/mobile.html', './dist/application.js'])
            .pipe(gulpCopy('./www', { prefix: 1 }))
            .on('error', _Reject)
            .on('end', _Resolve)
    });
}

function buildMobile(_Done) {
    buildClient()
        .then(prepareMobile)
        // .then(deployMobile) 
        .then(_Done);
}

function deployMobile() {
    // TODO
}

function deployStarter(){
    return new Promise(function (_Resolve, _Reject) {
        gulp.src(['./views/starter.html', './dist/starter-application.js', './electron/package.json', './dist/starter.js'])
            .pipe(gulpCopy('./dist/electron', { prefix: 1 }))
            .on('error', _Reject)
            .on('end', _Resolve)
    });
}

function deployDesktop() {
    return gulp.src(['./views/desktop.html', './dist/application.js', './dist/application.js.map', './data/simple.json'])
        .pipe(gulpCopy('./dist/public', { prefix: 1 }))
    //    .pipe( del( ['./dist/application.js'] ) );
}