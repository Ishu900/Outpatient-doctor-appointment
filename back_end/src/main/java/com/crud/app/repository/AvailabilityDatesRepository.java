package com.crud.app.repository;


import com.crud.app.model.AvailabilityDates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvailabilityDatesRepository extends JpaRepository<AvailabilityDates, Integer> {


}
