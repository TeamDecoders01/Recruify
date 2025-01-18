package org.decoders.recruify.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String jwt;
    private String message;
    private String email;
    @JsonProperty("full_name")
    private String fullName;
    private String roles;
    @JsonProperty("user_type")
    private String userType;
}
