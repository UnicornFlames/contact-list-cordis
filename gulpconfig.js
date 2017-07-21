'use strict';
var gulpConfig = (function () {
    function gulpConfig() {
        this.jsFiles = './js/**/*.js';
        this.libraryJSFiles = [ 
            "library/angular/angular.js",
            "library/angular/angular-route.min.js",
            "library/angular/angular-ui-router.js", 
            "library/bootstrap/bootstrap.min.js",
        ]
    }
    return gulpConfig;
})

module.exports = gulpConfig;