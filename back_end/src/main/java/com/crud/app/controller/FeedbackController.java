package com.crud.app.controller;


import com.crud.app.model.Appointment;
import com.crud.app.model.Feedback;
import com.crud.app.services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @GetMapping("feedback")
    public List<Feedback> list(){
        return feedbackService.listAll();
    }

    @GetMapping("feedback/{id}")
    public ResponseEntity<Feedback> get(@PathVariable Integer id){
        try{
            Feedback feedback  = feedbackService.get(id);
            return new ResponseEntity<Feedback>(feedback, HttpStatus.OK);

        } catch (NoSuchElementException e){
            return new ResponseEntity<Feedback>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("feedback")
    public ResponseEntity<Feedback> add(@RequestBody Feedback feedback){
        feedbackService.save(feedback);
        return new ResponseEntity<Feedback>(feedback,HttpStatus.CREATED);
    }

    @PutMapping("feedback")
    public ResponseEntity<?> update(@RequestBody Feedback feedback) {
        try {
            Feedback existFeedback = feedbackService.update(feedback);
            feedbackService.save(feedback);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("feedback/{id}")
    public void delete(@PathVariable Integer id) {
        feedbackService.delete(id);
    }


}
