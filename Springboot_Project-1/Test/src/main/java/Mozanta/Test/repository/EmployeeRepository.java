package Mozanta.Test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import Mozanta.Test.model.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, String> {
    
}
