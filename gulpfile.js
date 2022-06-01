const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


//compile scss into css
function style() {
    return gulp.src("./sass/*.scss")
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./public",
           index: "index.html"
        }
    });
    gulp.watch('./public/*.html').on('change', browserSync.reload);
    gulp.watch("./sass/*.scss", style)   
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;