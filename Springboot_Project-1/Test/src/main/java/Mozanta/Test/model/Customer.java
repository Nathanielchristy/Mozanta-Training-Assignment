package Mozanta.Test.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Setter
@Getter
@ToString
@Document(collection = "Employee")
public class Customer {
    @Id
    public String id;
    public String fname;
    public String lname;
    public Customer() {
    }
    public Customer(String id, String fname, String lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    
}
