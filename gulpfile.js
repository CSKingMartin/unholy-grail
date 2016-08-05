var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');
var assign = require('lodash.assign');

var customOpts = {
	entries: ['./src/index.js'],
	debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('js', bundle);
b.on('update', function() {
	bundle()
	.pipe(browserSync.stream());
});
b.on('log', gutil.log);

function bundle() {
	return b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/'));
}


// var customOpts = {
// 	entries: ['./src/index.js'],
// 	debug: true
// };

// gulp.task('js', function() {
// 	var opts = assign({}, watchify.args, customOpts);
// 	var b = browserify(opts);
	
// 	b.on('update', function() {
// 		bundle()
// 		.pipe(browserSync.stream());
// 	});
	
// 	b.on('log', gutil.log);

// 	// b.transform(watchify, { opts })
// 	function bundle() {
// 		return b.bundle()
// 			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
// 			.pipe(source('bundle.js'))
// 			.pipe(gulp.dest('./dist/'));
// 	}

// 	return bundle();
// });



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

	gulp.src('./src/main.scss')
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

gulp.task('gi', function() {
	gulp.src('./src/images/*.**')
	.pipe(gulp.dest('dist/images/'));
});