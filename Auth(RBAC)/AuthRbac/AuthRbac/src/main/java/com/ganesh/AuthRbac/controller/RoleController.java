package com.ganesh.AuthRbac.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class RoleController {
	
	 @GetMapping("/api/public")
	    public String publicEndpoint() {
	        return "Public Content";
	    }

	    @GetMapping("/api/user")
	    public String userEndpoint() {
	        return "User Content";
	    }

	    @GetMapping("/api/admin")
	    public String adminEndpoint() {
	        return "Admin Content";
	    }

}
