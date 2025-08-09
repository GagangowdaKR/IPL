package com.example.iplticketbooking.iplticketbooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.iplticketbooking.iplticketbooking.entity.User;

public interface UserRepository extends MongoRepository<User, String> {
  public User findByAadhar(String aadhar);
  public User findByEmail(String email);
}
