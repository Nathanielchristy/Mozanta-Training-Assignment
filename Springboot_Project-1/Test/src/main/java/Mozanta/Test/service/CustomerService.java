package Mozanta.Test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import Mozanta.Test.model.Customer;
import Mozanta.Test.repository.CustomerRepository;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository repo;
    public List<Customer> getDetails(){
        return repo.findAll();
    }
    // public List<Customer> viewDetails(String id){
    //     return repo.findById(id);
    // }
    public Customer insertDetails(Customer cust){
        return repo.save(cust);
    }
    public ResponseEntity<String> deleteDetails(String id){
        if (repo.findById(id).isPresent()){
            repo.deleteById(id);
            return new ResponseEntity<>("Data Deleted",HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Id Not Found Unable to Delete",HttpStatus.NOT_FOUND);
        }

    }
    public ResponseEntity<String> updateDetails(String id,Customer cust){
        if (repo.findById(id).isPresent()){
            cust.setId(id);
            repo.save(cust);
            return new ResponseEntity<>("Data Updated",HttpStatus.OK);
        }
        else{
            repo.save(cust);
            return new ResponseEntity<>("ID not found new entry entered",HttpStatus.OK);
        }
    }
    
}
