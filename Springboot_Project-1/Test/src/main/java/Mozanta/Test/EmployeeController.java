package Mozanta.Test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
@GetMapping("/index")
public List <Employee> fetchDetails(){
    return employeeService.fetchDetails();
}
@GetMapping("/indexs/{id}")
public Employee getDetails(@PathVariable Long id){
    return employeeService.getDetails(id);
}
@GetMapping("/view/")       
public Employee viewDetails(@RequestParam Long id){
    return employeeService.viewDetails(id);
}
@PostMapping("/addemployee")
public Employee postDetails(@RequestBody Employee emp){
    return employeeService.postDetails(emp);
}
@DeleteMapping("/delete/{id}")
public List <Employee> delDetails(@PathVariable Long id){
    return employeeService.delDetails(id);
}
@PutMapping("/put/{id}")
public List <Employee> putDetails(@PathVariable Long id,@RequestBody Employee emp){
    return employeeService.putDetails(id,emp);
}
}
