'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import hbsfy from 'hbsfy';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import rename from 'gulp-rename';

gulp.task('scripts', () => {

	let bundler = browserify(global.config.const_settings.jsInitializerLocation, {
		transform: [
			['babelify', {
				'presets': ['es2015']
			}],
			['hbsfy', {
				extensions: ['hbs'],
			}],
		],
		paths: global.browserify_paths,
		debug: false,
	});

	let bundle = () => {
		return bundler
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(uglify({
				compress: {
					sequences: true,
					properties: true,
					dead_code: true,
					drop_debugger: true,
					conditionals: true,
					comparisons: true,
					evaluate: true,
					booleans: true,
					loops: true,
					unused: true,
					if_return: true,
					join_vars: true,
					cascade: true,
					side_effects: true,
					warnings: true,
					drop_console: true,
					unsafe: false,
				},
				mangle: true,
			}))
			.pipe(rename({
					suffix: '.min',
					extname: '.js',
				})
			)
			.pipe(gulp.dest(global.config.const_settings.distLocation + '/js'))

	};

	return bundle();

});
