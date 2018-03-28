let gulp = require('gulp');
let gulpCopy = require('gulp-copy');
let webpack = require('webpack-stream');
let del = require('del');
let cordova = require('cordova-lib').cordova ;


let webpackClientConfiguration = require('./webpack.client.config');
let webpackServerConfiguration = require('./webpack.server.config');

gulp.task('default', defaultTask);
gulp.task('buildClient', buildClient);
gulp.task('buildServer', buildServer);

/**
 * Builds the software
 */
function defaultTask( _Done ) {
    buildMobile( _Done );
}

function buildServer(){
    return gulp.src('./src')
        .pipe(webpack( webpackServerConfiguration )) ;
}

// quasi prebuild
function buildClient(){
    return new Promise( function(_Resolve , _Reject) {
        gulp.src('./src')
        .pipe(webpack( webpackClientConfiguration ))
        .on('error',_Reject)
        .pipe(gulp.dest('./dist'))
        .on('end',_Resolve)
    }) ;
}

function prepareMobile(){
    return new Promise( function(_Resolve , _Reject) {
        gulp.src( ['./views/mobile.html', './dist/application.js' ])
        .pipe( gulpCopy( './www', { prefix : 1 } ) )
        .on('error',_Reject)
        .on('end',_Resolve)
    } );
}

function buildMobile( _Done ){
    buildClient()
        .then(prepareMobile)
        // .then(deployMobile) 
        .then(_Done);
}

function deployMobile(){
    // TODO
}

function deployDesktop(){
    return gulp.src([ './views/desktop.html' , './dist/application.js' , './dist/application.js.map' , './data/simple.json' ])
               .pipe( gulpCopy( './dist/public' , { prefix : 1 } ) )
            //    .pipe( del( ['./dist/application.js'] ) );
}