package com.crud.app.services;


import com.crud.app.model.Patient;
import com.crud.app.model.User;
import com.crud.app.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> listAll(){
        return patientRepository.findAll();
    }

    public Patient get(int id){
        return patientRepository.findById(id).get();

    }

    public void save(Patient patient){
        patientRepository.save(patient);
    }

    public Patient update(Patient patient){
        return patientRepository.save(patient);
    }

    public void delete(int id){
        patientRepository.deleteById(id);
    }

}
