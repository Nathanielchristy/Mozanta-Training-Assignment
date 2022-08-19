package com.blogapp.backend.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.blogapp.backend.model.BlogData;

public interface BlogDataRepository extends MongoRepository<BlogData,String> {
    @Query(value = "{bid : ?0}")
    List<BlogData> findBybid(String bid); 
    @DeleteQuery(value = "{bid : ?0}")
    List<BlogData> deleteBybid(String bid); 
    @Query(value = "{uid : ?0}")
    List<BlogData> findBybuid(String uid,Sort sort);



}
