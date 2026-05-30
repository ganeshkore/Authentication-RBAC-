package com.ganesh.AuthRbac.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {


	@Email(message = "Invalid emial format")
	@NotBlank(message = "Email is needed for login")
	private  String email;

	@NotBlank(message = "password is required ")
	private String password;

}
