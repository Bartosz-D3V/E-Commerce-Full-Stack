package com.ecommerce.bean.domain.transaction;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "order_item")
public class OrderItem {

	@Id
	@NotNull
	@GeneratedValue
	@Column(name = "order_item_id")
	private long id;

	@NotNull
	private int quantity;

	@Column(name = "product_id")
	private long productId;

	@JsonIgnore
	@ManyToMany(cascade = {CascadeType.ALL})
	@JoinTable(name = "delivery", joinColumns = {@JoinColumn(name = "order_item_id")},
		inverseJoinColumns = {@JoinColumn(name = "basket_id")})
	private Set<Basket> basket;

	public OrderItem(int quantity, long productId) {
		this.quantity = quantity;
		this.productId = productId;
	}

	public OrderItem() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Set<Basket> getBasket() {
		return basket;
	}

	public void setBasket(Set<Basket> basket) {
		this.basket = basket;
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

}
