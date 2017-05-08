'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

gulp.task('images-dev', () => {

	return gulp.src(global.config.const_settings.allImgFiles)
		.pipe(gulp.dest(global.config.const_settings.distLocation + '/images'))
		.pipe(reload({
			stream: true,
		}));

});
