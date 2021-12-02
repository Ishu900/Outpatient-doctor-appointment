package com.crud.app.controller;


import com.crud.app.model.Patient;
import com.crud.app.model.User;
import com.crud.app.services.PatientService;
import com.crud.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping("patient")
    public List<Patient> list(){
        return patientService.listAll();
    }

    @GetMapping("patient/{id}")
    public ResponseEntity<Patient> get(@PathVariable Integer id){
        try{
            Patient patient = patientService.get(id);
            return new ResponseEntity<Patient>(patient, HttpStatus.OK);

        } catch (NoSuchElementException e){
            return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping("patient")
    public ResponseEntity<Patient> add(@RequestBody Patient patient ){
        patientService.save(patient);
        return new ResponseEntity<Patient>(patient,HttpStatus.CREATED);
    }

    @PutMapping("patient")
    public ResponseEntity<?> update(@RequestBody Patient patient ) {
        try {
            Patient existPatient = patientService.update(patient);
            patientService.save(patient);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("patient/{id}")
    public void delete(@PathVariable Integer id) {
        patientService.delete(id);
    }

}
