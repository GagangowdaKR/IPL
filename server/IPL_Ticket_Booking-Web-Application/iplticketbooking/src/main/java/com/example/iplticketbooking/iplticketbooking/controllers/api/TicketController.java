package com.example.iplticketbooking.iplticketbooking.controllers.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.iplticketbooking.iplticketbooking.Response;
import com.example.iplticketbooking.iplticketbooking.entity.Ticket;
import com.example.iplticketbooking.iplticketbooking.entity.UserTicket;
import com.example.iplticketbooking.iplticketbooking.repository.TicketRepository;
import com.example.iplticketbooking.iplticketbooking.repository.UserTicketRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TicketController {

  @Autowired
  private TicketRepository ticketRepository;

  @Autowired
  private UserTicketRepository userTicketRepository;

  @GetMapping("/create-ticket")
  public Response createTicket(@ModelAttribute Ticket ticket) {
    ticketRepository.save(ticket);
    // System.out.println("Stored Ticket : "+ticket.getAudienceMobileNumber());
    Response response = new Response();
    response.message = "Ticket Created Successfully";
    response.status = 200;
    return response;
  }
  @GetMapping("/add-user")
  public Response addUser(@ModelAttribute UserTicket userTicket) {
    userTicketRepository.save(userTicket);
    Response response = new Response();
    response.message = "User Ticket Created Successfully";
    response.status = 200;
    return response;
  }

  @GetMapping("/all-ticket")
  public Iterable<Ticket> allTicket() {
    Iterable<Ticket> iterable = ticketRepository.findAll();
    return iterable;
  }

  @GetMapping("/get-user-ticket")
  public Iterable<UserTicket> getUserTicket(@RequestParam String ticket_number) {
    Iterable<UserTicket> userTicket = userTicketRepository.findAllByTicketNumber(ticket_number);
    return userTicket;
  }

  @GetMapping("/get-ticket")
  public Ticket getTicket(@RequestParam String ticket_number) {
    Ticket ticket = ticketRepository.findByTicketNumber(ticket_number);
    return ticket;
  }

  @GetMapping("/cancel-ticket")
  public Response cancelTicket(@RequestParam String ticket_number) {
    Response response = new Response();
    Ticket ticket = ticketRepository.findByTicketNumber(ticket_number);
    if (ticket != null) {
      ticketRepository.delete(ticket);
      response.message = "Ticket Cancelled Successfully";
      response.status = 200;
    } else {
      response.message = "Ticket Not Found";
      response.status = 404;
    }
    return response;
  }

  @GetMapping("/get-all-user-ticket")
  public Iterable<Ticket> getAllUserTicket(@RequestParam String email) {
    Iterable<Ticket> tickets = ticketRepository.findAllByEmail(email);
    return tickets;
  }
}
