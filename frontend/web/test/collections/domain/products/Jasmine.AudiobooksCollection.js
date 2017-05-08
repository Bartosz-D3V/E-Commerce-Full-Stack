'use strict';

import AudiobookModel from 'AudiobookModel';
import AudiobooksCollection from 'AudiobooksCollection';

describe('AudiobooksCollection', function() {

	const audiobooksCollection = new AudiobooksCollection();
	const audiobook1 = new AudiobookModel({
		'id': 1,
		'title': 'Example title',
	});

	it('should be defined', () => {
		expect(AudiobooksCollection).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(audiobooksCollection).not.toBe(null);
	});

	it('can return audiobook by id', () => {
		audiobooksCollection.add(audiobook1);
		expect(audiobook1).toEqual(audiobooksCollection.getModelById(1));
	});

});
