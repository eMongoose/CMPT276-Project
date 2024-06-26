package org.mbsampling.mbs.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    String login() {
        return "login";
    }

    @GetMapping("/forgotpassword")
    String forgotPassword() {
        return "forgotpassword";
    }

    @GetMapping ("sign-up")
    String signUp() {
        return "sign-in-redirect";
    }
}
