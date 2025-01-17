package org.decoders.recruify.request;

import lombok.Data;

@Data
public class JobRequest {
    private String jobTitle;
    private String jobRole;
    private String companyName;
    private String duration;
    private String experience;
    private String jobDescription;
    private String requirements;
    private String additionalSkills;
    private Double stipend;
}
