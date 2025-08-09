package com.example.iplticketbooking.iplticketbooking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.iplticketbooking.iplticketbooking.entity.IPLMatch;

public interface MatchRepository extends MongoRepository<IPLMatch, String> {
  Iterable<IPLMatch> findAllByLocationAndDate( String Location, String date);
  Iterable<IPLMatch> findAllByLocation( String Location);
}
