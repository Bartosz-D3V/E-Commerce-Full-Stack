package com.ecommerce.repository.domain.products;


import com.ecommerce.bean.domain.products.Audiobook;

import java.util.List;

public interface AudiobookRepository {

	void addSingleAudiobook(Audiobook audiobook);

	Audiobook getSingleAudiobook(long id);

	List<Audiobook> getAllAudiobooks();

}
