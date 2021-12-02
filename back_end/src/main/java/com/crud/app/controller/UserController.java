package com.crud.app.controller;

import com.crud.app.model.User;
import com.crud.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Locale;
import java.util.NoSuchElementException;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin("*")
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/registeruser")
    public User RegistrationController(@RequestBody User user) throws Exception {
        String tempUserName = user.getUserName();
        if(tempUserName!=null && !"".equals(tempUserName)){
            User userobj = userService.fetchUserByUserName(tempUserName);
            if(userobj != null){
                throw new Exception("user with "+ tempUserName + "is allready exist");
            }
        }
        User userObj =null;
        userObj = userService.save(user);
        return userObj;
    }


    @PostMapping("/login")
    public  User loginUser(@RequestBody User user) throws Exception {
        String tempUserName=user.getUserName();
        String tempPass = user.getPassword();
        User userObj = null;
        if(tempUserName !=null && tempPass != null){
            userObj = userService.fetchUserByUserNameAndPassword(tempUserName,tempPass);
        }
        if (userObj==null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }


    @GetMapping("user")
    public List<User> list(){
        return userService.listAll();
    }

    @GetMapping("user/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<User> get(@PathVariable Integer id){
        try{
            User user = userService.get(id);
            return new ResponseEntity<User>(user, HttpStatus.OK);

        } catch (NoSuchElementException e){
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping("user")
    public ResponseEntity<User> add(@RequestBody User user ){
        userService.save(user);
        return new ResponseEntity<User>(user,HttpStatus.CREATED);
    }


    @PutMapping("user")
    public ResponseEntity<?> update(@RequestBody User user ) {
        try {
            User existUser = userService.update(user);
            userService.save(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


//    @PutMapping("user/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user){
//        User userUpdate = userService.updateUser(id)
//                .orElseThrow(()->new ConfigDataResourceNotFoundException(("Employee not exit with id : "+id));
//
//        userUpdate.setUserName(user.getUserName());
//        userUpdate.setPassword(user.getPassword());
//        userUpdate.setRole(user.getRole());
//
//        User u = userService.save(userUpdate);
//        return ResponseEntity.ok(u);
//
//    }


    @DeleteMapping("user/{id}")
    public void delete(@PathVariable Integer id) {
        userService.delete(id);
    }



}
