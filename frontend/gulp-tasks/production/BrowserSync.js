'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('browserSync', () => {

	return browserSync.init({
		server: {
			baseDir: global.config.const_settings.distLocation,
			index: 'index.html',
		},
		ui: false,
		open: false,
	});

});
