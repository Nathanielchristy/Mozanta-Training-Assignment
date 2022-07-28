package Mozanta.Test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Mozanta.Test.model.Customer;
import Mozanta.Test.service.CustomerService;

@RestController
public class CustomerController {
    @Autowired
    CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }
    @GetMapping("/api/view")
    public List<Customer> getDetails(){
        return customerService.getDetails();
    }
    // @GetMapping("/api/view/{id}")
    // public List<Customer> viewDetails(@PathVariable String id){
    //     return customerService.viewDetails(id);
    // }
    @PostMapping("/api/insert")
    public Customer insertDetails(@RequestBody Customer cust){
        return customerService.insertDetails(cust);
    }
    @DeleteMapping("/api/delete/{id}")
    public ResponseEntity<String> deleteDetails(@PathVariable String id){
        return customerService.deleteDetails(id);
    } 
    @PutMapping("/api/update/{id}")
    public ResponseEntity<String> updateDetails(@PathVariable String id,@RequestBody Customer cust){
        return customerService.updateDetails(id,cust);
    } 
}
