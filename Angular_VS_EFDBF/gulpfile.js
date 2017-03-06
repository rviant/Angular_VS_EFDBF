/// <binding BeforeBuild='index' />
var gulp = require('gulp');
var angularFilesort = require('gulp-angular-filesort'), inject = require('gulp-inject');

//Run using 'gulp index'
gulp.task('index', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./**/*.js', './**/*.css']);

    target
        .pipe(inject(sources))
        .pipe(gulp.dest('./'));
    //angularFilesort())
});

gulp.task('default', ['index']);



//require("any-promise/register/bluebird")

// var angularFilesort = require('gulp-angular-filesort'),
//     inject = require('gulp-inject');

// gulp.src('./index.html')
//     .pipe(inject(
//         gulp.src(['./**/*.js']).pipe(angularFilesort())
//     ))
//     .pipe(gulp.dest('./'));



///// <binding Clean='clean' />
//"use strict";

//var gulp = require("gulp"),
//  rimraf = require("rimraf"),
//  concat = require("gulp-concat"),
//  cssmin = require("gulp-cssmin"),
//  uglify = require("gulp-uglify");

//var paths = {
//    webroot: "./wwwroot/"
//};

//paths.js = paths.webroot + "js/**/*.js";
//paths.minJs = paths.webroot + "js/**/*.min.js";
//paths.css = paths.webroot + "css/**/*.css";
//paths.minCss = paths.webroot + "css/**/*.min.css";
//paths.concatJsDest = paths.webroot + "js/site.min.js";
//paths.concatCssDest = paths.webroot + "css/site.min.css";

//gulp.task("clean:js", function (cb) {
//    rimraf(paths.concatJsDest, cb);
//});

//gulp.task("clean:css", function (cb) {
//    rimraf(paths.concatCssDest, cb);
//});

//gulp.task("clean", ["clean:js", "clean:css"]);

//gulp.task("min:js", function () {
//    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
//      .pipe(concat(paths.concatJsDest))
//      .pipe(uglify())
//      .pipe(gulp.dest("."));
//});

//gulp.task("min:css", function () {
//    return gulp.src([paths.css, "!" + paths.minCss])
//      .pipe(concat(paths.concatCssDest))
//      .pipe(cssmin())
//      .pipe(gulp.dest("."));
//});

//gulp.task("min", ["min:js", "min:css"]);

//////Run using 'gulp index'
//gulp.task('index', function () {
//    var target = gulp.src('./index.html');
//    // It's not necessary to read the files (will speed up things), we're only after their paths:
//    var sources = gulp.src(['./**/*.js', './**/*.css']);

//    target
//        .pipe(inject(sources))
//        .pipe(gulp.dest('./'));
//    //angularFilesort())
//});
