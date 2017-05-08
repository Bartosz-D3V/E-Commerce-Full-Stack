package com.ecommerce.bean.domain.products;


import com.ecommerce.enumeration.Genre;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Entity;
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
public class Book extends Product {

	@Column(name = "cover_type")
	private String coverType;
	@Column(name = "number_of_pages")
	private int numberOfPages;

	public Book(long id, String title, String author, String category, Genre genre, String description,
				int publicityYear, BigDecimal price, String coverType, int numberOfPages, int quantity, String olid) {
		super(id, title, author, category, "Books", genre, description, publicityYear, price, quantity, olid);
		this.coverType = coverType;
		this.numberOfPages = numberOfPages;
	}

	public Book() {
		super();
	}

	public String getCoverType() {
		return coverType;
	}

	public void setCoverType(String coverType) {
		this.coverType = coverType;
	}

	public int getNumberOfPages() {
		return numberOfPages;
	}

	public void setNumberOfPages(int numberOfPages) {
		this.numberOfPages = numberOfPages;
	}

}
