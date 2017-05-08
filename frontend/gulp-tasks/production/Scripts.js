'use strict';

import gulp from 'gulp';
import hbsfy from 'hbsfy';
import browserify from 'browserify';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserifyIncr from 'browserify-incremental';

const reload = browserSync.reload;

gulp.task('scripts-dev', () => {

	let bundler = browserify(global.config.const_settings.jsInitializerLocation, {
		transform: [
			['babelify', {
				'presets': ['es2015'],
			}],
			['hbsfy', {
				extensions: ['hbs'],
			}],
		],
		paths: global.browserify_paths,
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true,
		watch: true,
	});

	let bundle = () => {
		return bundler
			.bundle()
			.on('error', function(error) {
				console.log(error.toString());
				this.emit('end');
			})
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(rename({
					suffix: '.min',
					extname: '.js',
				})
			)
			.pipe(gulp.dest(global.config.const_settings.distLocation + '/js'))
			.pipe(reload({
				stream: true,
			}));
	};

	if (global.isWatching) {
		bundler = browserifyIncr(bundler);
		bundler.on('update', bundle);
	}

	return bundle();

});
