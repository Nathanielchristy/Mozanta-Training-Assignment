package Mozanta.Test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import Mozanta.Test.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer,String>{
    // public Customer findByFirstName(String firstName);
    // public List<Customer> findByLastName(String lastName);
    
}
