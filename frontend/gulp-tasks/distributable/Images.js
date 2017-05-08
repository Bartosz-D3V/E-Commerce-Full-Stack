'use strict';

import gulp from 'gulp';
import imageMin from 'gulp-imagemin';

gulp.task('images', () => {

	return gulp.src(global.config.const_settings.allImgFiles)
		.pipe(imageMin({
			optimizationLevel: 7,
			progressive: true,
			interlaced: true,
		}))
		.pipe(gulp.dest(global.config.const_settings.distLocation + '/images'));

});
