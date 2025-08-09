package com.example.iplticketbooking.iplticketbooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.iplticketbooking.iplticketbooking.entity.VerifyUser;

public interface VerifyUserRepository extends MongoRepository<VerifyUser, String> {
  public VerifyUser findByEmail(String email);

  public void deleteByEmail(String email);
}
