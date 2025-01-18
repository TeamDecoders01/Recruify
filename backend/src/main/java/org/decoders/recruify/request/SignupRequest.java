package org.decoders.recruify.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String password;
    @JsonProperty("full_name")
    private String fullName;
    @JsonProperty("user_type")
    private String userType;
    @JsonProperty("user_name")
    private String userName;
}
