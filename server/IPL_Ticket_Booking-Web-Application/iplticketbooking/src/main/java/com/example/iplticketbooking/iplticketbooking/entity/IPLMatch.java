package com.example.iplticketbooking.iplticketbooking.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "IPLMatch")
public class IPLMatch {

  @Id
  private String match_number;

  private String match_name;
  private String location;
  private String date;
  private String time;

  public String getMatchNumber() {
    return match_number;
  }

  public void setMatchNumber(String matchNumber) {
    this.match_number = matchNumber;
  }

  public String getMatchName() {
    return match_name;
  }

  public void setMatchName(String matchName) {
    this.match_name = matchName;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public String getTime() {
    return time;
  }

  public void setTime(String time) {
    this.time = time;
  }
}
