package com.blogapp.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Document(collection = "Blogusers")
@CompoundIndex(def = "{'email': 1, 'password': 1}", unique = true)
public class BlogUsers {
    @Id
    public String id;
    public String uid;
    public String firstName;
    public String lastName;
    public String email;
    public String dob;
    public String password;
    public String role;
    public BlogUsers() {
    }
    public BlogUsers(String id,String uid, String firstName, String lastName, String email, String dob, String password,String role) {
        this.id = id;
        this.uid = uid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.password = password;
        this.role=role;
    }
    public BlogUsers(String firstName, String lastName, String email, String dob, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.password = password;
    }
}
