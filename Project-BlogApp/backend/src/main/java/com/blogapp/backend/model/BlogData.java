package com.blogapp.backend.model;


import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document(collection = "BlogData")
public class BlogData {
    @Id
    public String id;
    public String uid;
    public String UserName;
    public String title;
    public String content;
    public String bid;
    public Integer like;
    public String date;
    public List<String> usersLiked;
    public BlogData(String id, String uid, String title, String content, String bid, Integer like, String date,
            List<String> usersLiked) {
        this.id = id;
        this.uid = uid;
        this.title = title;
        this.content = content;
        this.bid = bid;
        this.like = like;
        this.date = date;
        this.usersLiked = usersLiked;
    }
    public BlogData(String id, String uid, String userName, String title, String content, String bid, Integer like,
            String date, List<String> usersLiked) {
        this.id = id;
        this.uid = uid;
        UserName = userName;
        this.title = title;
        this.content = content;
        this.bid = bid;
        this.like = like;
        this.date = date;
        this.usersLiked = usersLiked;
    }
    public BlogData() {
    }




    
}
