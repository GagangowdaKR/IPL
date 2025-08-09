package com.example.iplticketbooking.iplticketbooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.iplticketbooking.iplticketbooking.entity.Admin;

public interface AdminRepository extends MongoRepository<Admin, String> {
  public Admin findByAadhar(String aadhar);
  public Admin findByEmail(String email);
}
