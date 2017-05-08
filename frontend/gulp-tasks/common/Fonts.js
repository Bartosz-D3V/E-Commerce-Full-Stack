'use strict';

import gulp from 'gulp';

gulp.task('fonts', () => {

	return gulp.src(global.config.libraries.font_awesome_font)

		.pipe(gulp.dest('./dist/fonts'));

});
