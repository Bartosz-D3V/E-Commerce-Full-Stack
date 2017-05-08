'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';

const reload = browserSync.reload;

gulp.task('html-dev', () => {

	return gulp.src(global.config.const_settings.indexLocation)
		.pipe(plumber())
		.pipe(gulp.dest(global.config.const_settings.distLocation))
		.pipe(reload({
			stream: true,
		}));

});
