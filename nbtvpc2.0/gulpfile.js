"use strict";

var gulp = require('gulp');
var scp2 = require('gulp-scp2');
var sequence = require('run-sequence');

gulp.task('dev', function(){
    return gulp.src('dist/**')
        .pipe(scp2({
            host: '121.40.57.104',
            username: 'root',
            password: 'Nbdxj@2017Nbdxj!2018',
            dest: '/nbtvu/src/yui-parent/yui-admin-ui/src/PC'
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
