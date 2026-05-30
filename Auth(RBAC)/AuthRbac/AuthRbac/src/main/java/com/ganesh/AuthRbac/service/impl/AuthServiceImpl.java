package com.ganesh.AuthRbac.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ganesh.AuthRbac.dto.AuthResponse;
import com.ganesh.AuthRbac.dto.LoginRequest;
import com.ganesh.AuthRbac.dto.RegisterRequest;
import com.ganesh.AuthRbac.entity.User;
import com.ganesh.AuthRbac.repository.UserRepository;
import com.ganesh.AuthRbac.security.JwtUtil;
import com.ganesh.AuthRbac.service.AuthService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

	private final UserRepository userRepo;

	private final PasswordEncoder pwdEncoder;

	private final JwtUtil jwtUtil ;


	@Override
	public String register( RegisterRequest request) {

		User user = new User();

		user.setName(request.getName());
		user.setEmail(request.getEmail());


		user.setPassword(pwdEncoder.encode(request.getPassword()));

		user.setRole(request.getRole());

		userRepo.save(user);




		return "User Registered Successfully !";
	}

	@Override
	public AuthResponse login(LoginRequest request) {


		   User user = userRepo.findByEmail(request.getEmail())
		            .orElseThrow(() -> new RuntimeException("Invalid email or password"));

		    boolean isPasswordMatched = pwdEncoder.matches(
		            request.getPassword(),
		            user.getPassword()
		    );

		    if (!isPasswordMatched) {
		        throw new RuntimeException("Invalid email or password");
		    }


		    String token = jwtUtil.generateToken(user.getEmail());

		    return new AuthResponse(token);


	}

}
