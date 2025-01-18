package org.decoders.recruify.response;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class JobResponse {
    private Long id;
    private String jobTitle;
    private String jobRole;
    private String companyName;
    private String duration;
    private String experience;
    private String jobDescription;
    private String requirements;
    private String additionalSkills;
    private Double stipend;
    private LocalDateTime createdAt;
    private String recruiterName;
}
