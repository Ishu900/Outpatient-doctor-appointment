package com.crud.app.services;

import com.crud.app.model.Appointment;
import com.crud.app.model.Feedback;
import com.crud.app.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;

    public List<Feedback> listAll(){
        return feedbackRepository.findAll();
    }

    public Feedback get(int id){
        return feedbackRepository.findById(id).get();

    }

    public void save(Feedback feedback){
        feedbackRepository.save(feedback);
    }

    public Feedback update(Feedback feedback ){
        return feedbackRepository.save(feedback);
    }

    public void delete(int id){
        feedbackRepository.deleteById(id);
    }
}
