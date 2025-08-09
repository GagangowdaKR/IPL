package com.example.iplticketbooking.iplticketbooking.controllers.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import com.example.iplticketbooking.iplticketbooking.EmailSenderService;
import com.example.iplticketbooking.iplticketbooking.Response;
import com.example.iplticketbooking.iplticketbooking.entity.VerifyUser;
import com.example.iplticketbooking.iplticketbooking.repository.VerifyUserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ForgotPasswordController {

  @Autowired
  private VerifyUserRepository verifyUserRepository;

  @Autowired
  private EmailSenderService emailSenderService;

  @GetMapping("/send-otp")
  public Response sendOtp(@RequestParam String email) {
    String OTP = (int) Math.floor(100000 + Math.random() * 9000000) + "";
    emailSenderService.sendEmail(
        email,
        "OTP for IPL Ticket Booking App ",
        "Your OTP is " + OTP);
    VerifyUser verifyUser = new VerifyUser();
    verifyUser.setEmail(email);
    verifyUser.setOtp(OTP);
    verifyUserRepository.save(verifyUser);
    Response response = new Response();
    response.message = "OTP Sent Successfully";
    response.status = 200;
    return response;
  }

  @GetMapping("/verify-otp")
  @Transactional
  public Response verifyOtp(
      @RequestParam String email,
      @RequestParam String otp) {
    VerifyUser verifyUser = verifyUserRepository.findByEmail(email);
    if (verifyUser.getOtp().equals(otp)) {
      verifyUserRepository.deleteByEmail(email);
      Response response = new Response();
      response.message = "OTP Verified Successfully";
      response.status = 200;
      return response;
    }
    Response response = new Response();
    response.message = "OTP Verification Failed";
    response.status = 400;
    return response;
  }
}