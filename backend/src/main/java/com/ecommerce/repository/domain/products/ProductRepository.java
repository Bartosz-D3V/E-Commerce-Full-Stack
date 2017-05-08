package com.ecommerce.repository.domain.products;


import com.ecommerce.bean.domain.products.Product;
import com.ecommerce.bean.domain.transaction.OrderItem;
import com.ecommerce.exception.TransactionCorrupted;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

public interface ProductRepository {

	List getAllProducts();

	BigDecimal recalculatePrice(List<OrderItem> orderItems) throws TransactionCorrupted;

	void updateProducts(Set<OrderItem> basket);

	Set<Product> searchByPhrase(String phrase);

	List<?> getAllAvailableTitles();

	Product getSingleProduct(long id);

	Product getSingleProduct(String title);

}
