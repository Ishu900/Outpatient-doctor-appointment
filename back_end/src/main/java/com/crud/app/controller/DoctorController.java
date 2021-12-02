package com.crud.app.controller;

import com.crud.app.model.Doctor;
import com.crud.app.model.Patient;
import com.crud.app.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("doctor")
    public List<Doctor> list(){
        return doctorService.listAll();
    }

    @GetMapping("doctor/{id}")
    public ResponseEntity<Doctor> get(@PathVariable Integer id){
        try{
            Doctor doctor = doctorService.get(id);
            return new ResponseEntity<Doctor>(doctor, HttpStatus.OK);

        } catch (NoSuchElementException e){
            return new ResponseEntity<Doctor>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping("doctor")
    public ResponseEntity<Doctor> add(@RequestBody Doctor doctor ){
        doctorService.save(doctor);
        return new ResponseEntity<Doctor>(doctor,HttpStatus.CREATED);
    }

    @PutMapping("doctor")
    public ResponseEntity<?> update(@RequestBody Doctor doctor ) {
        try {
            Doctor existDoctor = doctorService.update(doctor);
            doctorService.save(doctor);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("doctor/{id}")
    public void delete(@PathVariable Integer id) {
        doctorService.delete(id);
    }


}
