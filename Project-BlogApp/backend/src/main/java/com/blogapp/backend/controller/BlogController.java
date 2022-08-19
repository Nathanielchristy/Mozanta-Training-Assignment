package com.blogapp.backend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.blogapp.backend.model.BlogUsers;
import com.blogapp.backend.service.BlogService;

@CrossOrigin
@RestController
public class BlogController {
    @Autowired
    BlogService blogservice;
    
    public BlogController(BlogService blogservice) {
        this.blogservice = blogservice;
    }
    @GetMapping("/api/index")
    public List<BlogUsers> fetchDetails(){
        return blogservice.fetchDetails();
    }
    @PostMapping("/api/insertUser")
    public ResponseEntity<String> insertData(@RequestBody BlogUsers bloguser){
        return blogservice.insertData(bloguser);
    }
    @PostMapping("/api/login")
    public ResponseEntity<Object> loginCheck(@RequestBody BlogUsers bloguser){
        return blogservice.loginCheck(bloguser);
    }
    
}
