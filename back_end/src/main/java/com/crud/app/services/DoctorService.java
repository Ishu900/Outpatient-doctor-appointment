package com.crud.app.services;


import com.crud.app.model.Doctor;

import com.crud.app.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;


    public List<Doctor> listAll(){
        return doctorRepository.findAll();
    }

    public Doctor get(int id){
        return doctorRepository.findById(id).get();

    }

    public void save(Doctor doctor){
        doctorRepository.save(doctor);
    }

    public Doctor update(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    public void delete(int id){
        doctorRepository.deleteById(id);
    }
}
