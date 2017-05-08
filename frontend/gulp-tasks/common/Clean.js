'use strict';

import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean', () => {

	return gulp.src(global.config.const_settings.distLocation)

		.pipe(clean());

});
