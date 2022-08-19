package com.blogapp.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.blogapp.backend.model.BlogUsers;
import com.blogapp.backend.repository.BlogRepository;

@Service
public class BlogService {
    @Autowired
    BlogRepository blogrepo;
    public List<BlogUsers> fetchDetails(){
        return blogrepo.findAll();
    }
    public ResponseEntity<String> insertData(BlogUsers bloguser){
        Long count=blogrepo.count();
        count+=1;
        String role="user";
        if(count <=999 ){
        String uid="UN"+String.format("%03d", count);
        bloguser.setUid(uid);
    }else{
        String uid="UN"+count;
        bloguser.setUid(uid);
    }
        bloguser.setRole(role);
        try {
            String email=bloguser.getEmail();
            if(blogrepo.findbyEmail(email).isEmpty()){
                blogrepo.save(bloguser);
                return new ResponseEntity<>("Data Inserted",HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Data already exist",HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Data not Inserted",HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
    public ResponseEntity<Object> loginCheck(BlogUsers blogUsers){
        String email=blogUsers.getEmail();
        String password=blogUsers.getPassword();
        try {
            List <BlogUsers> data=blogrepo.findbyEmail(email);
            if (data.isEmpty()){
                return new ResponseEntity<>("Email ID Not Found",HttpStatus.OK);
            }
            else{
                String dbpass=data.get(0).password;
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("uid",data.get(0).uid);
                map.put("firstName",data.get(0).firstName);
                map.put("lastName",data.get(0).lastName);
                map.put("dob",data.get(0).dob);
                map.put("role",data.get(0).role);
                map.put("email",data.get(0).email);
                if(dbpass.equals(password)){
                    return new ResponseEntity<>(map,HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>("Password is incorrect",HttpStatus.OK);
            }
            }
        } catch (Exception e) {
            System.out.print(e);
        }
        
        // String dbpass=data.get(0).password;
    
        return new ResponseEntity<>("Exception",HttpStatus.FORBIDDEN);
        // System.out.println(password);
        // System.out.print(role);
        // if(data.isEmpty()){
        //     System.out.print("Data not found");
        //     return new ResponseEntity<>("user not found",HttpStatus.OK);
        // }
        // else{
        //     if(dbpass.equals(password)){
        //         return new ResponseEntity<>("Password correct",HttpStatus.OK);
        //     }
        //     else{
        //         return new ResponseEntity<>("password incorrect",HttpStatus.OK);
        //     }
        // }
        

    }
}
