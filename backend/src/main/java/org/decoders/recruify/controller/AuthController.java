package org.decoders.recruify.controller;

import org.decoders.recruify.config.JwtProvider;
import org.decoders.recruify.model.Role;
import org.decoders.recruify.model.User;
import org.decoders.recruify.repository.UserRepository;
import org.decoders.recruify.request.LoginRequest;
import org.decoders.recruify.request.SignupRequest;
import org.decoders.recruify.response.AuthResponse;
import org.decoders.recruify.service.CustomUserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    private CustomUserDetailsImpl customUserDetails;
    @Autowired
    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomUserDetailsImpl customUserDetails, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.customUserDetails = customUserDetails;
        this.authenticationManager = authenticationManager;
    }

    public AuthController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createUserHandler(@RequestBody SignupRequest signupRequest) {
        try {
            User isUserExist = userRepository.findByEmail(signupRequest.getEmail());
            if (isUserExist != null) {
                return new ResponseEntity<>("Email already exists", HttpStatus.BAD_REQUEST);
            }

            User newUser = new User();
            newUser.setEmail(signupRequest.getEmail());
            newUser.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
            newUser.setFullName(signupRequest.getFullName());


            Role roles;
            if ("recruiter".equalsIgnoreCase(signupRequest.getUserType())) {
                roles = Role.RECRUITER;
            } else if ("candidate".equalsIgnoreCase(signupRequest.getUserType())) {
                roles = Role.CANDIDATE;
            } else {
                return new ResponseEntity<>("Invalid user type", HttpStatus.BAD_REQUEST);
            }
            newUser.setRole(roles);

            User savedUser = userRepository.save(newUser);

            Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), signupRequest.getPassword(), List.of(new SimpleGrantedAuthority(roles.name())));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = JwtProvider.generateToken(authentication);
            AuthResponse response = new AuthResponse();
            response.setJwt(jwt);
            response.setMessage("Signup successful");
            response.setEmail(savedUser.getEmail());
            response.setFullName(savedUser.getFullName());
            response.setRoles(roles.name());
            response.setUserType(signupRequest.getUserType());

            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error during signup: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user = userRepository.findByEmail(loginRequest.getEmail());
            String jwt = JwtProvider.generateToken(authentication);

            AuthResponse response = new AuthResponse();
            response.setJwt(jwt);
            response.setMessage("Login successful");
            response.setEmail(user.getEmail());
            response.setFullName(user.getFullName());
            response.setRoles(user.getRole().name());
            response.setUserType(user.getRole() == Role.RECRUITER ? "recruiter" : "candidate");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error during signin: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
