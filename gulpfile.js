const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
// const minifyImg = require('gulp-imagemin');
const minifyJS = require('gulp-uglify-es').default;
const minifyHTML = require('gulp-htmlmin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const runSequence = require('gulp4-run-sequence');

gulp.task('browser-sync', (done) => {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
    done();
});

gulp.task('css', (done) => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.']
        }).on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(autoprefixer())
        .pipe(concat('default.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
        done();
});

gulp.task('js', (done) => {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(minifyJS())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
        done();
});

gulp.task('html', (done) => {
    console.log("Started");
    gulp.src('src/**/*.html')
        .pipe(minifyHTML({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
        done();
});

// gulp.task('img', (done) => {
//     console.log("Started");
//     gulp.src('src/img/**/*')
//         .pipe(minifyImg())
//         .pipe(gulp.dest('dist/img'));  
//         done(); 
// });

gulp.task('delete', () => del(['dist/css', 'dist/js', 'dist/**/*.html']));

gulp.task('watch', (done) => {
    gulp.watch("src/scss/**/*.scss", gulp.series('css'));
    gulp.watch("src/js/**/*.js",  gulp.series('js'));
    gulp.watch("src/img/**/*",  gulp.series('img'));
    gulp.watch("src/**/*.html",  gulp.series('html'));
    done();
});

gulp.task('default', (done) => {
    console.log("Started");
    runSequence(
        'delete',
        'css',
        'js',
        'browser-sync',
        'watch'
    );
    done();  
});