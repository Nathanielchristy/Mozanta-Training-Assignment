package com.blogapp.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.blogapp.backend.model.BlogData;
import com.blogapp.backend.repository.BlogDataRepository;

@Service
public class BlogDataService {
    @Autowired
    BlogDataRepository repo;
    public Integer fetchCount(){
        List<BlogData> result = repo.findAll(Sort.by(Sort.Direction.DESC, "_id"));
        if(CollectionUtils.isEmpty(result)){
            return 0;
        }else{
        String data=result.get(0).bid;
        String numberOnly= data.replaceAll("[^0-9]", "");
        Integer count=Integer.parseInt(numberOnly);
        return count;
        }
    }
    public ResponseEntity<Object> fetchData(){
        Object data=repo.findAll(Sort.by(Sort.Direction.DESC, "bid"));
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
    public ResponseEntity<Object> fetchDataUid(String uid){
        Sort sort=Sort.by(Sort.Direction.DESC,"bid");
        Object data=repo.findBybuid(uid,sort);
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
    public ResponseEntity<String> insertData(BlogData blogdata){
        Integer count=fetchCount();
        count+=1;
        List<String> test=new ArrayList<>();
        blogdata.setUsersLiked(test);
        if(count <=999 ){
        String bid="BN"+String.format("%03d", count);
        blogdata.setBid(bid);
    }else{
        String bid="BN"+count;
        blogdata.setBid(bid);
    }
    String bid=blogdata.bid;
    blogdata.setLike(0);
    System.out.println(blogdata);
        try {
            if(repo.findBybid(bid).isEmpty()){
                repo.save(blogdata);
                return new ResponseEntity<>("Data Inserted",HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Data already exist",HttpStatus.OK);
            }
            
            
        } catch (Exception e) {
            return new ResponseEntity<>("Data not Inserted",HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
    public ResponseEntity<Object> deleteData(String bid){
            List<BlogData> data=repo.findBybid(bid);
            if(data.isEmpty()){
                return new ResponseEntity<>("Data not Dound",HttpStatus.OK);
            }
            else{
                repo.deleteBybid(data.get(0).bid);
                return new ResponseEntity<>("Data Deleted",HttpStatus.OK);
            }
            
    }
    public ResponseEntity<Object> updateLike(String uid,BlogData blogdata){
        List<BlogData> data=repo.findBybid(blogdata.bid);
        if(data.isEmpty()){
            return new ResponseEntity<>("Data not Dound",HttpStatus.OK);
        }
        else{
            BlogData a=data.get(0);
            List<String> users=new ArrayList<>();
            users=a.getUsersLiked();
            System.out.print(users);
            Integer like=a.getLike();
            like+=1;
            if (!users.isEmpty()){
                if(users.contains(uid))
                {
                    return new ResponseEntity<>("User already liked",HttpStatus.BAD_REQUEST);
                }else{
                    users.add(uid);
                    a.setUsersLiked(users);
                    a.setLike(like);
                    repo.save(a);
                    return new ResponseEntity<>("Data Updated",HttpStatus.OK);
                }

            }else{
                users.add(0, uid);
                a.setUsersLiked(users);
                a.setLike(like);
                repo.save(a);
                return new ResponseEntity<>("Data Updated",HttpStatus.OK);
                }}

        
    }
    public ResponseEntity<Object> updateData(BlogData blogdata){
        String title=blogdata.title;
        String content=blogdata.content;
        List<BlogData> data=repo.findBybid(blogdata.bid);
        if(data.isEmpty()){
            return new ResponseEntity<>("Data not Dound",HttpStatus.OK);
        }
        else{
            BlogData a=data.get(0);
            a.setTitle(title);
            a.setContent(content);
            repo.save(a);
            return new ResponseEntity<>("Data Updated",HttpStatus.OK);
        }
    }

}
