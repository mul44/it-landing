const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/* -----Static server----- */
gulp.task('server', function() {
    browserSync.init({
        server: {
            port:9000,
            baseDir: "buid"
        }
    });

    gulp.watch('build/**/*')
});
