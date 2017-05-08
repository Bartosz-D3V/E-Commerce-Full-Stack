package com.ecommerce.bean.domain.transaction;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
public class Basket {

	@Id
	@NotNull
	@GeneratedValue
	private long id;

	@ManyToMany(cascade = {CascadeType.ALL})
	@JoinTable(name = "delivery", joinColumns = {@JoinColumn(name = "basket_id")},
		inverseJoinColumns = {@JoinColumn(name = "order_item_id")})
	private Set<OrderItem> orderItems;

	@Column(name = "customer_email")
	private String customerEmail;

	public Basket(Set<OrderItem> orderItems, String customerEmail) {
		this.orderItems = orderItems;
		this.customerEmail = customerEmail;
	}

	public Basket() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Set<OrderItem> getBasket() {
		return orderItems;
	}

	public void setBasket(Set<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
}
