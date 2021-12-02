package com.crud.app.services;

import com.crud.app.model.Admin;
import com.crud.app.model.Doctor;
import com.crud.app.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> listAll(){
        return adminRepository.findAll();
    }

    public Admin get(int id){
        return adminRepository.findById(id).get();

    }

    public void save(Admin admin){
        adminRepository.save(admin);
    }

    public Admin update(Admin admin){
        return adminRepository.save(admin);
    }

    public void delete(int id){
        adminRepository.deleteById(id);
    }
}
