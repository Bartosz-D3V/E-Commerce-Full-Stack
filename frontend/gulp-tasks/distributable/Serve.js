'use strict';

import gulp from 'gulp';
import serve from 'gulp-serve';

gulp.task('serve', ['build'], serve({

	root: global.config.const_settings.distLocation,
	port: 3000,

}));
