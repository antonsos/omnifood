const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const gp = require('gulp-path');

var input = gp.generateBlob('resources/css', 'design', '*', 'css');
var output = gp.generateBlob('resources/css', null, null, null);
 
gulp.task('prefix', () =>
    gulp.src(input + '')
        .pipe(autoprefixer({
            browsers: ['last 50 versions', 'ie >= 9'],
            cascade: false
        }))
        .pipe(gulp.dest(output + ''))
);