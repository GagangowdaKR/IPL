package com.example.iplticketbooking.iplticketbooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.iplticketbooking.iplticketbooking.entity.UserTicket;

public interface UserTicketRepository extends MongoRepository<UserTicket, String> {
  Iterable<UserTicket> findAllByTicketNumber(String ticketNumber);
}
