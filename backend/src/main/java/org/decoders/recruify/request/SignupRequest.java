package org.decoders.recruify.request;

import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String password;
    private String fullName;
    private String userType;
    private String userName;
}
