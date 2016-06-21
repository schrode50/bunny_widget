'use strict';

const clean = require('gulp-clean');
const gulp = require('gulp');
const webpack = require('webpack-stream');

const paths = {
  js: __dirname + '/app/**/*.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/style.css'
};

gulp.task('clean', ()=>{
  gulp.src('./build/*')
    .pipe(clean());
});

gulp.task('copy', ()=>{
  gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
  gulp.src(paths.css)
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle', ()=>{
  gulp.src(paths.js)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['clean', 'copy', 'bundle']);

gulp.task('default', ['build']);
