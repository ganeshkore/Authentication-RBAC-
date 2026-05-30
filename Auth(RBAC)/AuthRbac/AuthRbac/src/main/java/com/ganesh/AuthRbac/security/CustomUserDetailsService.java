package com.ganesh.AuthRbac.security;

import java.util.List;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ganesh.AuthRbac.entity.User;
import com.ganesh.AuthRbac.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service

@RequiredArgsConstructor

public class CustomUserDetailsService implements UserDetailsService {

	private final UserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String email)  throws UsernameNotFoundException  {

		User user = userRepo.findByEmail(email).orElseThrow(()-> new UsernameNotFoundException("User Not Found"));

		 return new org.springframework.security.core.userdetails.User(

	                user.getEmail(),

	                user.getPassword(),

	                List.of(
	                        new SimpleGrantedAuthority(
	                                "ROLE_" + user.getRole().name()
	                        )
	                )
	        );
	}

}
