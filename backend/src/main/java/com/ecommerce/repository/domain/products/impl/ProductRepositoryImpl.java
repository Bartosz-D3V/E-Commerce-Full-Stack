package com.ecommerce.repository.domain.products.impl;

import com.ecommerce.bean.domain.products.Product;
import com.ecommerce.bean.domain.transaction.OrderItem;
import com.ecommerce.exception.TransactionCorrupted;
import com.ecommerce.repository.domain.products.ProductRepository;
import com.ecommerce.tools.jpa_helper.SessionFactoryWrapper;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Repository
@Transactional
public class ProductRepositoryImpl implements ProductRepository {

	private final SessionFactoryWrapper sessionFactoryWrapper;

	public ProductRepositoryImpl(SessionFactoryWrapper sessionFactoryWrapper) {
		this.sessionFactoryWrapper = sessionFactoryWrapper;
	}

	@Override
	public List getAllProducts() {
		Session session = sessionFactoryWrapper.openSession();
		List products = session.createCriteria(Product.class)
			.add(Restrictions.between("quantity", 1, 100))
			.list();
		sessionFactoryWrapper.closeSession();

		return products;
	}

	@Override
	public BigDecimal recalculatePrice(List<OrderItem> orderItems) throws TransactionCorrupted {
		BigDecimal totalPrice = new BigDecimal(0);
		for (OrderItem orderItem : orderItems) {
			Product product = getSingleProduct(orderItem.getProductId());
			if (product == null) {
				throw new TransactionCorrupted("Transaction was corrupted");
			}
			totalPrice = totalPrice.add(product.getPrice());
		}

		return totalPrice;
	}

	@Override
	public void updateProducts(Set<OrderItem> basket) {
		Session session = sessionFactoryWrapper.openSession();
		Transaction transaction = session.beginTransaction();
		for (OrderItem orderItem : basket) {
			Product product = (Product) session.get(Product.class, orderItem.getProductId());
			int newQuantity = product.getQuantity() - orderItem.getQuantity();
			product.setQuantity(newQuantity);
			session.persist(product);
		}
		transaction.commit();
		sessionFactoryWrapper.closeSession();
	}


	@Override
	public Product getSingleProduct(long id) {
		Session session = sessionFactoryWrapper.openSession();
		Product product = (Product) session.get(Product.class, id);
		sessionFactoryWrapper.closeSession();

		return product;
	}

	@Override
	public Product getSingleProduct(String title) {
		Session session = sessionFactoryWrapper.openSession();
		Criteria criteria = session.createCriteria(Product.class);
		criteria.add(Restrictions.eq("title", title));

		return (Product) criteria.uniqueResult();
	}

	@Override
	public Set<Product> searchByPhrase(String phrase) {

		return null;
	}

	@Override
	public List<?> getAllAvailableTitles() {
		Session session = sessionFactoryWrapper.openSession();
		Criteria cr = session.createCriteria(Product.class)
			.setProjection(Projections.projectionList()
				.add(Projections.property("title"), "title"));
		List list = cr.list();
		sessionFactoryWrapper.closeSession();

		return list;
	}

}
