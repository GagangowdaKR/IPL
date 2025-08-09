package com.example.iplticketbooking.iplticketbooking;

import org.springframework.beans.factory.annotation.Autowired; // Add this import statement
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender; // Add this import statement
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {

  @Autowired
  private JavaMailSender javaMailSender;

  public void sendEmail(String toEmail, String subject, String body) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom("gagandarshan22@gmail.com");
    // message.setFrom("sahilgowda204@gmail.com");
    message.setTo(toEmail);
    message.setSubject(subject) ;
    message.setText(body);
    javaMailSender.send(message);

    System.out.println("Mail Sent Successfully");
  }
}
