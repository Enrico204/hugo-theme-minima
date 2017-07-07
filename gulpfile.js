'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', [ 'sass' ]);

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
    .pipe(sass({outputStyle: 'expanded', includePaths: ['node_modules', 'sass']}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('static/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/*.scss', ['sass']);
});