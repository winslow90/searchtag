/**
 * Created by superman90 on 7/4/16.
 */
var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var del = require('del');

gulp.task('css', function () {
    gulp.src([
        'bower_components/components-font-awesome/css/font-awesome.min.css',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'css/search.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('build/'));
});

gulp.task('compilejs',function(){
    gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular/angular.min.js'
    ])
        .pipe(concat('_lib.js'))
        .pipe(gulp.dest('build/'));

    gulp.src([
        'modules/**/App.js',
        'modules/**/**/*.js'
    ])
        .pipe(concat('_script.js'))
        .pipe(uglify({
            mangle:{
                except:['angular']
            }
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('linkjs',gulpsync.sync(['compilejs']),function(){

    gulp.src([
            'build/_lib.js',
            'build/_script.js'
        ])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('build/'));

});

gulp.task('clean',function(){

    return del.sync(['build/_*.js']);

});

gulp.task('default',gulpsync.sync(['css','compilejs']),function(){

});