"use strict";

var gulp = require('gulp');
var scp2 = require('gulp-scp2');
var sequence = require('run-sequence');

gulp.task('dev', function () {
  return gulp.src('dist/**')
    .pipe(scp2({
      host: '47.98.169.217',
      username: 'root',
      password: '201768durantDYP',
      dest: '/root/project/tvUniversity'
    }))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('default', function (done) {
  sequence(
    'dev',
    done
  )
});