package com.example.iplticketbooking.iplticketbooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.iplticketbooking.iplticketbooking.entity.Ticket;

public interface TicketRepository extends MongoRepository<Ticket, String> {
  public Ticket findByTicketNumber(String ticket_number);

  public Iterable<Ticket> findAllByEmail(String email);
}
 