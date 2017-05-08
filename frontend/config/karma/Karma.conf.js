// Karma configuration
// Generated on Thu Apr 27 2017 10:41:12 GMT+0100 (GMT Daylight Time)

var browserify_scanner = require('../browserify/browserify_scanner');

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '../../',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['browserify', 'jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'web/app/js/**/*.{js,hbs}',
			'web/test/**/*.js'
		],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'web/app/js/**/*.js': ['browserify'],
			'web/test/**/*.js': ['browserify'],
		},

		browserify: {
			paths: browserify_scanner.paths,
			transform: ['babelify', 'hbsfy'],
			extensions: ['.js', '.hbs']
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.INFO,
		client: {
			captureConsole: true,
		},

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
