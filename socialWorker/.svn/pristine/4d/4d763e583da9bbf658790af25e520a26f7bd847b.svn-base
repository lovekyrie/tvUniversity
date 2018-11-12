"use strict";

var gulp = require('gulp');
var scp2 = require('gulp-scp2');
var sequence = require('run-sequence');

gulp.task('dev', function(){
    return gulp.src('dist/**')
        .pipe(scp2({
            host: '101.132.39.8',
            username: 'root',
            password: 'Nbdxj@2017Nbdxj!2018',
            dest: '/usr/local/tomcat/ddln/yui-admin-ui/src'
        }))
        .on('error', function(err) {
            throw err;
        });
});

gulp.task('default', function(done){
    sequence(
        'dev',
        done
    )
});
