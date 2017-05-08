'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

gulp.task('shiv', () => {

	return gulp.src(global.config.libraries.shiv)
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min',
			extname: '.js',
		}))
		.pipe(gulp.dest(global.config.const_settings.distLocation + '/js'));

});
