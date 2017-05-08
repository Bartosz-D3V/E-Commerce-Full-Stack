'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import gulp_config from './config/gulp/gulp_config.json';
import browserify_scanner from './config/browserify/browserify_scanner.json'

global.config = gulp_config;
global.browserify_paths = browserify_scanner.paths;

const reload = browserSync.reload;
requireDir('./gulp-tasks', {
	recurse: true,
});

//Watch files for changes and refresh browser
gulp.task('watch', () => {

	gulp.watch(global.config.const_settings.indexLocation, ['html-dev'], reload);
	gulp.watch(global.config.const_settings.allScssFiles, ['styles-dev'], reload);
	gulp.watch(global.config.const_settings.allJsFiles, ['scripts-dev'], reload);
	gulp.watch(global.config.const_settings.allImgFiles, ['images-dev'], reload);

});

//Build the distributable project structure
gulp.task('build', () => {

	return runSequence('clean', ['fonts', 'styles', 'html', 'scripts', 'shiv', 'images'], () => {
		console.info('Project has been build using minification.');
	});

});

//Build the development project structure
gulp.task('build-dev', () => {

	return runSequence('clean', ['fonts', 'styles-dev', 'html-dev', 'scripts-dev', 'images-dev'], () => {
		console.info('Project has been build for development. Sourcemaps are in use.');
	});

});

//Default (runnable via 'gulp')
gulp.task('default', () => {

	return runSequence('build-dev', ['watch', 'browserSync'], () => {
		console.info('Development environment has been created. Watching for changes...');
	});

});
