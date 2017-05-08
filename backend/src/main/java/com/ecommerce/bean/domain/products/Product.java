package com.ecommerce.bean.domain.products;


import com.ecommerce.enumeration.Genre;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Product {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.TABLE)
	private long id;

	@NotNull
	private String title;

	private String author;
	private String category;
	private String publisher;

	@Enumerated(EnumType.STRING)
	private Genre genre;

	private String description;

	@Column(name = "publicity_year")
	private int publicityYear;
	private BigDecimal price;

	private int quantity;
	private String olid;

	public Product(long id, String title, String author, String category, String publisher, Genre genre,
				   String description, int publicityYear, BigDecimal price, int quantity, String olid) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.category = category;
		this.publisher = publisher;
		this.genre = genre;
		this.description = description;
		this.publicityYear = publicityYear;
		this.price = price;
		this.quantity = quantity;
		this.olid = olid;
	}

	public Product() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPublicityYear() {
		return publicityYear;
	}

	public void setPublicityYear(int publicityYear) {
		this.publicityYear = publicityYear;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getOlid() {
		return olid;
	}

	public void setOlid(String olid) {
		this.olid = olid;
	}
}
