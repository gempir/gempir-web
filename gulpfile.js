var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cssnano     = require('gulp-cssnano');


gulp.task('watch', function() {
    gulp.watch("sass/**/*.sass", ['build'])
});

gulp.task('sass', function() {
    return gulp.src("sass/style.sass")
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest("css"))
});

gulp.task('serve', ['sass', 'watch']);
gulp.task('build', ['sass']);
