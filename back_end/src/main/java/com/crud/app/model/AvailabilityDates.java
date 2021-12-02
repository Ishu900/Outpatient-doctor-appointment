package com.crud.app.model;


import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class AvailabilityDates {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int availabilityId;
    @OneToOne
    @JoinColumn(name ="FK_DoctorId")
    private Doctor doctor;
    private LocalDate fromDate;
    private LocalDate endDate;

    public AvailabilityDates() {
    }

    public AvailabilityDates(int availabilityId, Doctor doctor, LocalDate fromDate, LocalDate endDate) {
        this.availabilityId = availabilityId;
        this.doctor = doctor;
        this.fromDate = fromDate;
        this.endDate = endDate;
    }

    public int getAvailabilityId() {
        return availabilityId;
    }

    public void setAvailabilityId(int availabilityId) {
        this.availabilityId = availabilityId;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public LocalDate getFromDate() {
        return fromDate;
    }

    public void setFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
}
