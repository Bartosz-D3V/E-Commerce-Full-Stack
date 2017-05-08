'use strict';

import gulp from 'gulp';
import minifyHTML from 'gulp-htmlmin';

gulp.task('html', () => {

	return gulp.src(global.config.const_settings.indexLocation)
		.pipe(minifyHTML({
			'html5': true,
			'caseSensitive': false,
			'minifyURLs': true,
			'removeEmptyAttributes': true,
			'collapseWhitespace': true,
			'collapseBooleanAttributes': true,
			'removeComments': true,
			'useShortDoctype': true,
			'keepClosingSlash': true,
			'decodeEntities': true,
		}))
		.pipe(gulp.dest(global.config.const_settings.distLocation));

});
