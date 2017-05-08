'use strict';

import Customer from 'CustomerModel';

describe('CustomerModel', () => {

	let customer;

	beforeEach(() => {
		customer = new Customer({
			email: 'example@example.com',
			password: 'password',
			firstName: 'First name',
			lastName: 'Last Name',
			address: 'address',
		});
	});

	afterEach(() => {
		localStorage.removeItem('customerId');
	});

	it('should be defined', () => {
		expect(Customer).toBeDefined();
	});

	it('can be instantiated', () => {
		expect(customer).not.toBe(null);
	});

	it('should save id to variable and HTML5 localStorage', () => {
		const customerId = '100-A';
		customer.setId(customerId);
		expect(localStorage.getItem('customerId')).toBe(customerId);
	});

	it('should use HTML5 localStorage to get customer ID if it is not stored inside class property', () => {
		const customerId = '100-A';
		customer.setId(customerId);
		customer.set('id', null);
		expect(customer.getId()).toBe(customerId);
	});

	it('should login user by calling a method with login and password credentials', () => {
		// spyOn(customer.transactionChannel, 'login');
		// customer.loginUser();
		// expect(customer.transactionChannel.loginUser).toHaveBeenCalled();
	})

});
