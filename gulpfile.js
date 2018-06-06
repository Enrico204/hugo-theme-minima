'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass']);

gulp.task('sass', () =>
    gulp
        .src('src/sass/*.scss')
        .pipe(sass({ outputStyle: 'expanded', includePaths: ['node_modules', 'src/sass'] }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('static/css/'))
);

gulp.task('sass:watch', () =>
    gulp.watch('./sass/*.scss', ['sass'])
);
