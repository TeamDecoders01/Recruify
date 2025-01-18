package org.decoders.recruify.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class JobRequest {
    @JsonProperty("job_title")
    private String jobTitle;
    @JsonProperty("job_role")
    private String jobRole;
    @JsonProperty("company_name")
    private String companyName;
    private String duration;
    private String experience;
    @JsonProperty("job_description")
    private String jobDescription;
    private String requirements;
    @JsonProperty("additional_skills")
    private String additionalSkills;
    private Double stipend;
}
