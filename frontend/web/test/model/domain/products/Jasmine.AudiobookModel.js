'use strict';

import AudiobookModel from 'AudiobookModel';

describe('AudiobookModel', () => {

	let audiobookModel;

	beforeEach(() => {
		audiobookModel = new AudiobookModel();
	});

	it('should be defined', () => {
		expect(AudiobookModel).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(audiobookModel).not.toBe(null);
	});

});
