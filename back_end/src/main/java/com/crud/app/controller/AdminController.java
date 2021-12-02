package com.crud.app.controller;


import com.crud.app.model.Admin;
import com.crud.app.model.Employee;
import com.crud.app.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("admin")
    public List<Admin> list(){
        return adminService.listAll();
    }

    @GetMapping("admin/{id}")
    public ResponseEntity<Admin> get(@PathVariable Integer id){
        try{
            Admin admin  = adminService.get(id);
            return new ResponseEntity<Admin>(admin, HttpStatus.OK);

        } catch (NoSuchElementException e){
            return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("admin")
    public ResponseEntity<Admin> add(@RequestBody Admin admin){
        adminService.save(admin);
        return new ResponseEntity<Admin>(admin,HttpStatus.CREATED);
    }


    @PutMapping("admin")
    public ResponseEntity<?> update(@RequestBody Admin admin) {
        try {
            Admin existAdmin = adminService.update(admin);
            adminService.save(admin);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("admin/{id}")
    public void delete(@PathVariable Integer id) {
        adminService.delete(id);
    }

}
