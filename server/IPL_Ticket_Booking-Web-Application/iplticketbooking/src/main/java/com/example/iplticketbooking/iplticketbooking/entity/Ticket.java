package com.example.iplticketbooking.iplticketbooking.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Ticket")
public class Ticket {

  @Id
  String ticketNumber;

  String matchId;
  String method;
  int amount;
  String email;
  String audienceMobileNumber;

  public String getTicketNumber() {
    return ticketNumber;
  }

  public void setTicketNumber(String ticket_number) {
    this.ticketNumber = ticket_number;
  }

  public String getMatchId() {
    return matchId;
  }

  public void setMatchId(String match_id) {
    this.matchId = match_id;
  }

  public String getMethod() {
    return method;
  }

  public void setMethod(String method) {
    this.method = method;
  }

  public int getAmount() {
    return amount;
  }

  public void setAmount(int amount) {
    this.amount = amount;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getAudienceMobileNumber() {
    return audienceMobileNumber;
  }

  public void setAudienceMobileNumber(String audience_mobile_number) {
    this.audienceMobileNumber = audience_mobile_number;
  }
}
