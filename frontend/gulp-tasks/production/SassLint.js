'use strict';

import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';

gulp.task('sass-lint', () => {

	return gulp.src(global.config.const_settings.allScssFiles)
		.pipe(sassLint({
			configFile: global.config.const_settings.sass_lint,
		}))
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError());

});
