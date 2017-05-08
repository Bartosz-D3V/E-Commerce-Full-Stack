package com.ecommerce.enumeration;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

public enum AudioExtension {

	MP3("MP3"),
	WAV("WAV"),
	CDA("CDA");

	private String audioExtension;

	AudioExtension(String audioExtension) {
		audioExtension = audioExtension;
	}

	@Enumerated(EnumType.STRING)
	public String getAudioExtension() {
		return audioExtension;
	}

}
