package com.crud.app.repository;


import com.crud.app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public User findByUserName(String userName);
    public User findByUserNameAndPassword(String userName, String password);
}
