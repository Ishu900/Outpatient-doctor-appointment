package com.crud.app.controller;


import com.crud.app.model.Appointment;
import com.crud.app.model.AvailabilityDates;
import com.crud.app.services.AvailabilityDatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class AvailabilityDatesController {

    @Autowired
    private AvailabilityDatesService availabilityDatesService;

    @GetMapping("availdates")
    public List<AvailabilityDates> list(){
        return availabilityDatesService.listAll();
    }


    @GetMapping("availdates/{id}")
    public ResponseEntity<AvailabilityDates> get(@PathVariable Integer id){
        try{
            AvailabilityDates availabilityDates  = availabilityDatesService.get(id);
            return new ResponseEntity<AvailabilityDates>(availabilityDates, HttpStatus.OK);

        } catch (NoSuchElementException e){
            return new ResponseEntity<AvailabilityDates>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("availdates")
    public ResponseEntity<AvailabilityDates> add(@RequestBody AvailabilityDates availabilityDates){
        availabilityDatesService.save(availabilityDates);
        return new ResponseEntity<AvailabilityDates>(availabilityDates,HttpStatus.CREATED);
    }


    @PutMapping("availdates")
    public ResponseEntity<?> update(@RequestBody AvailabilityDates availabilityDates) {
        try {
            AvailabilityDates existAvailabilityDates = availabilityDatesService.update(availabilityDates);
            availabilityDatesService.save(availabilityDates);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("availdates/{id}")
    public void delete(@PathVariable Integer id) {
        availabilityDatesService.delete(id);
    }

}
