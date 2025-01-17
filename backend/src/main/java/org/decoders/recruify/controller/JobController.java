package org.decoders.recruify.controller;

import lombok.RequiredArgsConstructor;
import org.decoders.recruify.request.JobRequest;
import org.decoders.recruify.response.JobResponse;
import org.decoders.recruify.service.JobService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recruiter/jobs")
@RequiredArgsConstructor
public class JobController {
    private final JobService jobService;

    @PostMapping
    public ResponseEntity<JobResponse> createJob(
        @RequestBody JobRequest jobRequest,
        Authentication authentication) {
        JobResponse response = jobService.createJob(jobRequest, authentication.getName());
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<JobResponse>> getRecruiterJobs(Authentication authentication) {
        List<JobResponse> jobs = jobService.getRecruiterJobs(authentication.getName());
        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/{jobId}")
    public ResponseEntity<JobResponse> getJob(
        @PathVariable Long jobId,
        Authentication authentication) {
        JobResponse job = jobService.getJobById(jobId, authentication.getName());
        return ResponseEntity.ok(job);
    }

    @PutMapping("/{jobId}")
    public ResponseEntity<JobResponse> updateJob(
        @PathVariable Long jobId,
        @RequestBody JobRequest jobRequest,
        Authentication authentication) {
        JobResponse response = jobService.updateJob(jobId, jobRequest, authentication.getName());
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{jobId}")
    public ResponseEntity<Void> deleteJob(
        @PathVariable Long jobId,
        Authentication authentication) {
        jobService.deleteJob(jobId, authentication.getName());
        return ResponseEntity.noContent().build();
    }
}
