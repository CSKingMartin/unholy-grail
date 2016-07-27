var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('default', function() {
	console.log('welcome to gulp, idiot');
});

gulp.task('watch', function() {
	console.log("i'm watching you");
	gulp.watch('src/**/*.*', ['devBuild']);
});

gulp.task('devBuild', function() {
	console.log('moving shit to dist folder');

	gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream());

	gulp.src('./src/stylesheets/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream());

	
});

gulp.task('bs',['watch'], function(){
	browserSync({
		server: {
			baseDir: 'dist'
		}
	})
});
