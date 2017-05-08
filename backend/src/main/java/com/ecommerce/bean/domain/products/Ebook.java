package com.ecommerce.bean.domain.products;


import com.ecommerce.enumeration.Genre;

import javax.persistence.*;
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
public class Ebook extends Product {

	private String extension;
	private BigDecimal size;

	public Ebook(long id, String title, String author, String category, Genre genre, String description,
				 int publicityYear, BigDecimal price, String extension, BigDecimal size, int quantity, String olid) {
		super(id, title, author, category, "Ebooks", genre, description, publicityYear, price, quantity, olid);
		this.extension = extension;
		this.size = size;
	}

	public Ebook() {
		super();
	}

	public String getExtension() {
		return extension;
	}

	public void setExtension(String extension) {
		this.extension = extension;
	}

	public BigDecimal getSize() {
		return size;
	}

	public void setSize(BigDecimal size) {
		this.size = size;
	}
}
