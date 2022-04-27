package com.server.ssh.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    String message = "alpine-java";

    @GetMapping("/")
    public String index() {
        return message;
    }
}
