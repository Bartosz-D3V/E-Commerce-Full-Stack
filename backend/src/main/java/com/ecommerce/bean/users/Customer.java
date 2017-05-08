package com.ecommerce.bean.users;


import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@AttributeOverrides({
	@AttributeOverride(name = "id", column = @Column(name = "id")),
	@AttributeOverride(name = "email", column = @Column(name = "email")),
	@AttributeOverride(name = "password", column = @Column(name = "password")),
	@AttributeOverride(name = "firstName", column = @Column(name = "first_name")),
	@AttributeOverride(name = "lastName", column = @Column(name = "last_name"))
})
public class Customer extends User {

	@NotNull
	private String address;

	public Customer(String email, String password, String firstName, String lastName, String address) {
		super(email, password, firstName, lastName);
		this.address = address;
	}

	public Customer() {
		super();
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
