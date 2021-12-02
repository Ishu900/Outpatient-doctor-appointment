package com.crud.app.model;


import javax.persistence.*;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedbackId;
    private int rating;
    @OneToOne
    @JoinColumn(name ="FK_PatientId")
    private Patient patient;
    @OneToOne
    @JoinColumn(name ="FK_DoctorId")
    private Doctor doctor;
    private String feedbackComment;

    public Feedback() {
    }

    public Feedback(int feedbackId, int rating, Patient patient, Doctor doctor, String feedbackComment) {
        this.feedbackId = feedbackId;
        this.rating = rating;
        this.patient = patient;
        this.doctor = doctor;
        this.feedbackComment = feedbackComment;
    }

    public int getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(int feedbackId) {
        this.feedbackId = feedbackId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public String getFeedbackComment() {
        return feedbackComment;
    }

    public void setFeedbackComment(String feedbackComment) {
        this.feedbackComment = feedbackComment;
    }
}
