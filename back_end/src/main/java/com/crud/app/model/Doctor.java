package com.crud.app.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doctorId;
    private String doctorName;
    private String speciality;
    private String location;
    private String hospitalName;
    private String mobileNo;
    private String email;
    private String password;
    private double chargedPerVisit;

    public Doctor() {
    }

    public Doctor(int doctorId, String doctorName, String speciality, String location, String hospitalName, String mobileNo, String email, String password, double chargedPerVisit) {
        this.doctorId = doctorId;
        this.doctorName = doctorName;
        this.speciality = speciality;
        this.location = location;
        this.hospitalName = hospitalName;
        this.mobileNo = mobileNo;
        this.email = email;
        this.password = password;
        this.chargedPerVisit = chargedPerVisit;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getChargedPerVisit() {
        return chargedPerVisit;
    }

    public void setChargedPerVisit(double chargedPerVisit) {
        this.chargedPerVisit = chargedPerVisit;
    }
}
