package com.crud.app.controller;


import com.crud.app.model.Employee;
import com.crud.app.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class HomeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("employee")
    public List<Employee> list(){
        return employeeService.listAll();
    }

    @GetMapping("employee/{id}")
    public ResponseEntity<Employee> get(@PathVariable Long id){
        try{
            Employee employee = employeeService.get(id);
            return new ResponseEntity<Employee>(employee, HttpStatus.OK);

        } catch (NoSuchElementException e){
            return new ResponseEntity<Employee>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping("employee")
    public ResponseEntity<Employee> add(@RequestBody Employee employee){
        employeeService.save(employee);
        return new ResponseEntity<Employee>(employee,HttpStatus.CREATED);
    }

    @PutMapping("employee")
    public ResponseEntity<?> update(@RequestBody Employee employee) {
        try {
            Employee existEmployee = employeeService.update(employee);
            employeeService.save(employee);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("employee/{id}")
    public void delete(@PathVariable Long id) {
        employeeService.delete(id);
    }
}
