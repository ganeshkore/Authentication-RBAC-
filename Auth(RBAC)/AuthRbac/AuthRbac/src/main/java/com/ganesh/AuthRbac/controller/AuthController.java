package com.ganesh.AuthRbac.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ganesh.AuthRbac.dto.AuthResponse;
import com.ganesh.AuthRbac.dto.LoginRequest;
import com.ganesh.AuthRbac.dto.RegisterRequest;
import com.ganesh.AuthRbac.service.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {

	private final AuthService authService;

	@PostMapping("/register")
	public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest req){
		System.out.println(req);
		return ResponseEntity.ok(authService.register(req));

	}


	@PostMapping("/login")
	public ResponseEntity<AuthResponse> login(
	        @Valid @RequestBody LoginRequest request) {

	    return ResponseEntity.ok(authService.login(request));
	}

}
