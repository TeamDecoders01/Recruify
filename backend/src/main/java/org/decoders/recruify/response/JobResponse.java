package org.decoders.recruify.response;

import java.time.LocalDateTime;

import org.decoders.recruify.model.Job;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class JobResponse {
    private Long id;
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
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
    @JsonProperty("recruiter_name")
    private String recruiterName;

    public static JobResponse from(Job job) {
        JobResponse jobResponse = new JobResponse();
        jobResponse.setId(job.getId());
        jobResponse.setJobTitle(job.getJobTitle());
        jobResponse.setJobRole(job.getJobRole());
        jobResponse.setCompanyName(job.getCompanyName());
        jobResponse.setDuration(job.getDuration());
        jobResponse.setExperience(job.getExperience());
        jobResponse.setJobDescription(job.getJobDescription());
        jobResponse.setRequirements(job.getRequirements());
        jobResponse.setAdditionalSkills(job.getAdditionalSkills());
        jobResponse.setStipend(job.getStipend());
        jobResponse.setCreatedAt(job.getCreatedAt());
        jobResponse.setRecruiterName(job.getRecruiter().getFullName());
        return jobResponse;
    }
}
