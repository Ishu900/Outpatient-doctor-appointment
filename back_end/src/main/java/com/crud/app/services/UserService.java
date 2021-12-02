package com.crud.app.services;


import com.crud.app.model.User;
import com.crud.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User fetchUserByUserName(String userName){
        return userRepository.findByUserName(userName);
    }

    public User fetchUserByUserNameAndPassword(String userName, String password){
        return userRepository.findByUserNameAndPassword(userName, password);
    }

    public List<User> listAll(){
        return userRepository.findAll();
    }

    public User get(int id){
        return userRepository.findById(id).get();

    }

    public User save(User user){
       return userRepository.save(user);
    }

    public User update(User user){
        return userRepository.save(user);
    }

    public User updateUser(int id){
        return userRepository.findById(id).get();
    }

    public void delete(int id){
        userRepository.deleteById(id);
    }

}
