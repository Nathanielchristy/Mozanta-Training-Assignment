package Mozanta.Test.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import Mozanta.Test.model.Employee;

@Service
public class EmployeeService {
    public static Map<Long,Employee> employees= new HashMap<>();
    public static Long id=0L;
    static{

        // Employee employee1 = new Employee(1L,"Nathaniel","nathanielinnu@gmail.com");
        // Employee employee2 = new Employee(2L,"Joyal","joyal@gmail.com");
        // employees.put(1L,employee1);
        // employees.put(2L,employee2);
    }
    public List <Employee> fetchDetails(){
        return(new ArrayList<>(employees.values()));
    }
    public Employee getDetails(Long id){
        
        return(employees.get(id));
    }
    public Employee viewDetails(Long id){

        return(employees.get(id));
    }
    public Employee postDetails(Employee emp){
        id+=1L;
        emp.setId(id);
        employees.put(id,emp);
        return emp;
    }
    public List <Employee> delDetails(Long id){
        employees.remove(id);
        return (new ArrayList<>(employees.values()));
    }
    public List <Employee> putDetails(long id, Employee emp){
        emp.setId(id);
        employees.put(id,emp);
        return (new ArrayList<>(employees.values()));
    }
    
}
