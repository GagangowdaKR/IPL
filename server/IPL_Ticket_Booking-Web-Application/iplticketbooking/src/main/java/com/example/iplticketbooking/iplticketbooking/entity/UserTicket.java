package com.example.iplticketbooking.iplticketbooking.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserTicket")
public class UserTicket {

  @Id
  String userTicketId;

  String ticketNumber;

  String name;
  int age;
  String gender;
  String preference;
  String className;
  int price;
  String seatNumber;

  public String getTicketNumber() {
    return ticketNumber;
  }

  public void setTicketNumber(String ticket_number) {
    this.ticketNumber = ticket_number;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getPreference() {
    return preference;
  }

  public void setPreference(String preference) {
    this.preference = preference;
  }

  public String getClassName() {
    return className;
  }

  public void setClassName(String className) {
    this.className = className;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public String getSeatNumber() {
    return seatNumber;
  }

  public void setSeatNumber(String seatNumber) {
    this.seatNumber = seatNumber;
  } 
}
