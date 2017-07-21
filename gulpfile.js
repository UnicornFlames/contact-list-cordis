'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var Config = require('./gulpconfig');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var exec = require('child_process').exec;
var runSequence = require('run-sequence');
var globule = require("globule");
var htmlreplace = require('gulp-html-replace');
var config = new Config();
var libraryJSFiles = [
    "library/angular/angular.js",
    "library/angular/angular-route.min.js",
    "library/angular/angular-ui-router.js",
    "library/bootstrap/bootstrap.min.js"

]
gulp.task('library-js-files', function (cb) {
    return gulp.src(libraryJSFiles)
        .pipe(concat('libraries.js'))
        .pipe(gulp.dest('./www/dist/js/'))
})

gulp.task('html-replace', function () {
    var filePath = globule.find(['js/**/*.js', '!js/src/app.js']);
    var appFilePath = globule.find(['js/src/app.js']);
    return gulp.src('views/index.html')
        .pipe(htmlreplace({
            'replaceJS': filePath,
            'replaceAppJS': appFilePath
        })).pipe(gulp.dest('./www'))

})

gulp.task("copy-files", function () {
    var paths = [
        "library/angular/angular.js",
        "library/angular/angular-route.min.js",
        "library/angular/angular-ui-router.js",
        "library/angular/tether.min.js",
       "library/bootstrap/bootstrap.min.js",
    "library/bootstrap/ui-bootstrap-tpls-2.5.0.js",
    "library/bootstrap/angular-bootstrap-material.min.js",
        "library/css/common.css",
        "views/**/*",
        "js/**/*",
        "!views/index.html"
    ]
    return gulp.src(paths, { base: "./" }) // Providing "./" as base to preserve folder structure when copying files
        .pipe(gulp.dest("./www"));
})
gulp.task("run-browser", function (cb) {
    exec("node server.js", function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
gulp.task("watch", function () {
    var filesChanges = ["js/**/*", "scss/**/*", "views/**/*"]
    return watch(filesChanges, function () {
        runSequence(
            "library-js-files",
            "html-replace",
            "copy-files"

        )
    });
});

gulp.task("run-app", function () {
    runSequence(

        "library-js-files",
        "html-replace",
        "copy-files",
        "run-browser"
    )
})