package com.ecommerce.bean.domain.products;


import com.ecommerce.enumeration.AudioExtension;
import com.ecommerce.enumeration.Genre;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.math.BigDecimal;

@Entity
@AttributeOverrides({
	@AttributeOverride(name = "title", column = @Column(name = "title")),
	@AttributeOverride(name = "author", column = @Column(name = "author")),
	@AttributeOverride(name = "publisher", column = @Column(name = "publisher")),
	@AttributeOverride(name = "genre", column = @Column(name = "genre")),
	@AttributeOverride(name = "description", column = @Column(name = "description")),
	@AttributeOverride(name = "publicityYear", column = @Column(name = "publicity_year")),
	@AttributeOverride(name = "price", column = @Column(name = "price")),
	@AttributeOverride(name = "quantity", column = @Column(name = "quantity"))
})
public class Audiobook extends Product {

	@Column(name = "audio_extension")
	@Enumerated(EnumType.STRING)
	private AudioExtension audioExtension;

	@Column(name = "duration_time")
	private BigDecimal durationTime;

	public Audiobook(long id, String title, String author, String category, Genre genre, String description,
					 int publicityYear, BigDecimal price, AudioExtension audioExtension, BigDecimal durationTime,
					 int quantity, String olid) {
		super(id, title, author, category, "Audiobooks", genre, description, publicityYear, price, quantity, olid);
		this.audioExtension = audioExtension;
		this.durationTime = durationTime;
	}

	public Audiobook() {
		super();
	}

	public AudioExtension getAudioExtension() {
		return audioExtension;
	}

	public void setAudioExtension(AudioExtension audioExtension) {
		this.audioExtension = audioExtension;
	}

	public BigDecimal getDurationTime() {
		return durationTime;
	}

	public void setDurationTime(BigDecimal durationTime) {
		this.durationTime = durationTime;
	}

}
