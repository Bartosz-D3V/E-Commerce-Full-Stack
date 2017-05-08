'use strict';

import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('eslint', () => {

	return gulp.src(global.config.const_settings.allLintableJsFiles)
		.pipe(eslint({
			configFile: global.config.const_settings.eslint_config,
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());

});
