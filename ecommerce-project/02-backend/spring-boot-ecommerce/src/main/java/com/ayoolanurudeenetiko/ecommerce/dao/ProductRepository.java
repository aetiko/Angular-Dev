package com.ayoolanurudeenetiko.ecommerce.dao;

import com.ayoolanurudeenetiko.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
