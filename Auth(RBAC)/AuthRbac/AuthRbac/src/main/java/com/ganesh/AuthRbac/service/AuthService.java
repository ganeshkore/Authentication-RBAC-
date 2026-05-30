package com.ganesh.AuthRbac.service;

import com.ganesh.AuthRbac.dto.AuthResponse;
import com.ganesh.AuthRbac.dto.LoginRequest;
import com.ganesh.AuthRbac.dto.RegisterRequest;

public interface AuthService {

	String register(RegisterRequest request);

	AuthResponse login(LoginRequest request);
}
