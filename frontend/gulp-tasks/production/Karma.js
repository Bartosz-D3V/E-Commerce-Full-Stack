'use strict';

import gulp from 'gulp';
import karma from 'karma';

const Server = karma.Server;

gulp.task('karma', (done) => {

	new Server({
		configFile: require('path').resolve(global.config.const_settings.karma_config),
	}, done).start();

});
