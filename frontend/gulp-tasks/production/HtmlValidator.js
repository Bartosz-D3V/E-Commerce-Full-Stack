'use strict';

import gulp from 'gulp';
import w3cjs from 'gulp-w3cjs';

gulp.task('html-validate', function() {

	gulp.src(global.config.const_settings.indexLocation)
		.pipe(w3cjs())
		.pipe(w3cjs.reporter());

});
