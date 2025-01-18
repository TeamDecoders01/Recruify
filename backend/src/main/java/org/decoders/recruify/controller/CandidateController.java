package org.decoders.recruify.controller;

import java.util.List;

import org.decoders.recruify.model.Job;
import org.decoders.recruify.repository.JobRepository;
import org.decoders.recruify.response.JobResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/candidate/jobs")
@AllArgsConstructor
public class CandidateController {
    private final JobRepository repository;

    @GetMapping
    public ResponseEntity<List<JobResponse>> getJobs() {
        List<Job> jobs = repository.findAll();

        return ResponseEntity.ok(jobs.stream().map(JobResponse::from).toList());
    }

    @GetMapping("/{job_id}")
    public ResponseEntity<JobResponse> getJobById(@PathVariable("job_id") Long jobId) {
        Job job = repository.findById(jobId).orElse(null);

        if (job == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(JobResponse.from(job));
    }
}
