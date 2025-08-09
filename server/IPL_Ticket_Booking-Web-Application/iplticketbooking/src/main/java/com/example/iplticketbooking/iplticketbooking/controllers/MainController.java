package com.example.iplticketbooking.iplticketbooking.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String mainPage() {
        return "mainPage.html";
    }

    @GetMapping("/adminLogin")
    public String adminLogin() {
        return "adminLoginPage.html";
    }

    @GetMapping("/forgotAdmin")
    public String forgotAdmin() {
        return "forgotAdminPasswordPage.html";
    }

    @GetMapping("/adminReset")
    public String adminReset() {
        return "resetAdminPasswordPage.html";
    }

    @GetMapping("/adminDashBoard")
    public String adminDashBoard() {
        return "adminDashBoardPage.html";
    }

    @GetMapping("/adminRegister")
    public String adminRegister() {
        return "adminRegisterPage.html";
    }

    @GetMapping("/createMatch")
    public String createMatch() {
        return "createMatchPage.html";
    }

    @GetMapping("/viewBookedTicket")
    public String viewBookedTicket() {
        return "viewBookedTicketPage.html";
    }

    @GetMapping("/deleteMatch")
    public String deleteMatch() {
        return "deleteMatchPage.html";
    }

    @GetMapping("/editMatch")
    public String editMatch() {
        return "editMatchPage.html";
    }

    @GetMapping("/userLogin")
    public String userLogin() {
        return "userLoginPage.html";
    }

    @GetMapping("/forgotUser")
    public String forgotUser() {
        return "forgotUserPasswordPage.html";
    }

    @GetMapping("/resetPassword")
    public String resetPassword() {
        return "resetPasswordPage.html";
    }

    @GetMapping("/userDashBoard")
    public String userDashBoard() {
        return "userDashBoardPage.html";
    }

    @GetMapping("/userRegister")
    public String userRegister() {
        return "userRegisterPage.html";
    }

    @GetMapping("/bookTicket")
    public String bookTicket() {
        return "bookTicketPage.html";
    }

    @GetMapping("/audienceDetail")
    public String audienceDetail() {
        return "audienceDetailPage.html";
    }

    @GetMapping("/searchBookedTicketDetails")
    public String searchBookedTicketDetails() {
        return "searchBookedTicketDetailsPage.html";
    }

    @GetMapping("/cancelTicket")
    public String cancelTicket() {
        return "cancelTicketPage.html";
    }

    @GetMapping("/payment")
    public String payment() {
        return "paymentPage.html";
    }

    @GetMapping("/viewBookedDetail")
    public String viewBookedDetail() {
        return "viewBookedDetailPage.html";
    }

    @GetMapping("/searchMatch")
    public String searchMatch() {
        return "searchMatchPage.html";
    }
}
