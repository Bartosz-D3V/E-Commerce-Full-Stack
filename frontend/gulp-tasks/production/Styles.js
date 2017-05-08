'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import resetCSS from 'node-reset-scss';
import concatCSS from 'gulp-concat-css';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';

const reload = browserSync.reload;

gulp.task('styles-dev', () => {

	const bundler = [
        global.config.libraries.normalize,
        global.config.const_settings.scssManifestLocation,
		global.config.libraries.blaze,
		global.config.libraries.font_awesome,
		global.config.libraries.popups,
		global.config.libraries.sweetalert,
		global.config.libraries.awesomplete,
	];

	return gulp.src(bundler)
		.pipe(plumber())
		.pipe(sass({
			includePaths: resetCSS.includePath,
		}))
		.pipe(concatCSS(
			global.config.const_settings.concatCSSName,
			{
				rebaseUrls: false,
			}
		))
		.pipe(rename({
			suffix: '.min',
			extname: '.css',
		}))
		.pipe(gulp.dest(global.config.const_settings.distLocation + '/css'))
		.pipe(reload({
			stream: true,
		}));

});
