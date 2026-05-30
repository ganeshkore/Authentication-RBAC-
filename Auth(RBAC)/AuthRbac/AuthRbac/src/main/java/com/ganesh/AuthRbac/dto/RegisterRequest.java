package com.ganesh.AuthRbac.dto;

import com.ganesh.AuthRbac.enums.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {

	@NotBlank(message = "Name Cannot be Blank")
	private String name ;

	@Email(message = "Invalid Email Format")
	@NotBlank(message = "Email is Required")
	private String email;

	@NotBlank(message = "password is required ")
	private String password ;


	private Role role;
}
