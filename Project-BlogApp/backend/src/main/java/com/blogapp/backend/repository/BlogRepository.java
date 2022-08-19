package com.blogapp.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.blogapp.backend.model.BlogUsers;


public interface BlogRepository extends MongoRepository<BlogUsers,String> {

    @Query(value = "{email : ?0}")
    List<BlogUsers> findbyEmail(String email); 
    
}
