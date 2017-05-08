'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import resetCSS from 'node-reset-scss';
import concatCSS from 'gulp-concat-css';
import purify from 'gulp-purifycss';
import cleanCSS from 'gulp-clean-css';
import combineMQ from 'gulp-combine-mq';
import rename from 'gulp-rename';

gulp.task('styles', () => {

	const bundler = [
		global.config.libraries.normalize,
		global.config.const_settings.scssManifestLocation,
		global.config.libraries.blaze,
		global.config.libraries.font_awesome,
		global.config.libraries.popups,
		global.config.libraries.sweetalert,
		global.config.libraries.awesomplete,
	];

	const purifyOptions = {
		whitelist: ['*sweet*', '*animate*', '*rotate*'],
	};

	return gulp.src(bundler)
		.pipe(sass({
			includePaths: resetCSS.includePath,
		}))
		.pipe(combineMQ({
			beautify: false,
		}))
		.pipe(concatCSS(
			global.config.const_settings.concatCSSName,
			{
				rebaseUrls: false,
			},
		))
		.pipe(purify([
			global.config.const_settings.allJsFiles,
			global.config.const_settings.indexLocation,
		], purifyOptions))
		.pipe(cleanCSS({
			level: {
				2: {
					mergeAdjacentRules: true,
					mergeIntoShorthands: true,
					mergeMedia: true,
					mergeNonAdjacentRules: true,
					mergeSemantically: false,
					overrideProperties: true,
					removeEmpty: true,
					reduceNonAdjacentRules: true,
					removeDuplicateFontRules: true,
					removeDuplicateMediaBlocks: true,
					removeDuplicateRules: true,
					removeUnusedAtRules: true,
					restructureRules: false,
				},
			},
			'skip-rebase': true,
			'version': true,
			'compatibility': 'ie9',
		}))
		.pipe(rename({
			suffix: '.min',
			extname: '.css',
		}))
		.pipe(gulp.dest(global.config.const_settings.distLocation + '/css'));

});
