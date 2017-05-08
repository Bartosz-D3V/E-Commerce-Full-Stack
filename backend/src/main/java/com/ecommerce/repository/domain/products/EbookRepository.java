package com.ecommerce.repository.domain.products;


import com.ecommerce.bean.domain.products.Ebook;

import java.util.List;

public interface EbookRepository {

	void addSingleEbook(Ebook ebook);

	Ebook getSingleEbook(long id);

	List<Ebook> getAllEbooks();

}
