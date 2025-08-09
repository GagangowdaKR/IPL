package com.example.iplticketbooking.iplticketbooking.controllers.api;

import java.lang.Iterable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.iplticketbooking.iplticketbooking.Response;
import com.example.iplticketbooking.iplticketbooking.entity.Admin;
import com.example.iplticketbooking.iplticketbooking.repository.AdminRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

  @Autowired
  private AdminRepository adminRepository;

  @GetMapping(path = "/admin-login")
  public Response adminLogin(
      @RequestParam String username,
      @RequestParam String password) {
    Iterable<Admin> iterator = adminRepository.findAll();

    for (Admin user : iterator) {
      if (user.getUsername().equals(username) &&
          user.getPassword().equals(password)) {
        Response response = new Response();
        response.message = user.getAadhar();
        response.status = 200;
        return response;
      }
    }
    Response response = new Response();
    response.message = "Username or Password is incorrect";
    response.status = 400;
    return response;
  }

  @GetMapping(path = "/admin-register")
  public Response adminRegister(@ModelAttribute Admin admin) {

    Admin findAdmin = adminRepository.findByEmail(admin.getEmail());
    Response response = new Response();
    if (findAdmin == null) {
      adminRepository.save(admin);
      response.message = "Registration Successful";
      response.status = 200;
      return response;
    }
    response.message = "User exist with this email";
    response.status = 400;
    return response;
  }

  @GetMapping(path = "/get-admin")
  public Admin getAdmin(@RequestParam String aadhar) {
    Admin admin = adminRepository.findByAadhar(aadhar);
    return admin;
  }

  @GetMapping("/change-admin-password")
  public Response changeAdminPassword(
      @RequestParam String email,
      @RequestParam String password) {

    Admin admin = adminRepository.findByEmail(email);
    admin.setPassword(password);
    adminRepository.save(admin);
    Response response = new Response();
    response.message = "Password Changed Successfully";
    response.status = 200;
    return response;
  }

  @GetMapping("/get-admin-by-aadhar")
  public Admin getAdminByAadhar(@RequestParam String aadhar) {
    Admin admin = adminRepository.findByAadhar(aadhar);
    return admin;
  }
}
