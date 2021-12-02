package com.crud.app.services;

import com.crud.app.model.Employee;
import com.crud.app.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> listAll(){
        return employeeRepository.findAll();
    }

    public Employee get(Long id){
        return employeeRepository.findById(id).get();

    }

    public void save(Employee employee){
        employeeRepository.save(employee);
    }

    public Employee update(Employee employee){
       return employeeRepository.save(employee);
    }

    public void delete(Long id){
        employeeRepository.deleteById(id);
    }

}
