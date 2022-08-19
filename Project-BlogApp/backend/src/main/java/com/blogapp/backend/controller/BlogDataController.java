package com.blogapp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blogapp.backend.model.BlogData;
import com.blogapp.backend.service.BlogDataService;

@CrossOrigin
@RestController
public class BlogDataController {
    @Autowired
    BlogDataService blogDataService;

    public BlogDataController(BlogDataService blogDataService) {
        this.blogDataService = blogDataService;
    }
    @GetMapping(path = "/api/v2/count")
    public Integer fetchCount(){
        return blogDataService.fetchCount();
    }
    @GetMapping(path = "/api/v2/fetch")
    public ResponseEntity<Object> fetchData(){
        return blogDataService.fetchData(); 
    }
    @PostMapping(path = "/api/v2/fetchuid/")
    public ResponseEntity<Object> fetchDataUid(@RequestParam String uid){
        return blogDataService.fetchDataUid(uid); 
    }
    @PostMapping(path = "/api/v2/insert")
    public ResponseEntity<String> insertData(@RequestBody BlogData blogData){
        return blogDataService.insertData(blogData);
    }
    @PutMapping(path="/api/v2/like/")
    public ResponseEntity<Object> updateLike(@RequestParam String uid, @RequestBody BlogData blogData){
        return blogDataService.updateLike(uid,blogData);
    }
    @PutMapping(path="/api/v2/update")
    public ResponseEntity<Object> updateData(@RequestBody BlogData blogData){
        return blogDataService.updateData(blogData);
    }
    @DeleteMapping(path = "/api/v2/delete/")
    public ResponseEntity<Object> deleteData(@RequestParam String bid){
        return blogDataService.deleteData(bid);
    }
}
