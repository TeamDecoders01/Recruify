package org.decoders.recruify.service;

import java.util.List;
import java.util.stream.Collectors;

import org.decoders.recruify.model.Job;
import org.decoders.recruify.model.User;
import org.decoders.recruify.repository.JobRepository;
import org.decoders.recruify.repository.UserRepository;
import org.decoders.recruify.request.JobRequest;
import org.decoders.recruify.response.JobResponse;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JobService {
    private final JobRepository jobRepository;
    private final UserRepository userRepository;

    public JobResponse createJob(JobRequest jobRequest, String recruiterEmail) {
        User recruiter = userRepository.findByEmail(recruiterEmail);
        if (recruiter == null) {
            throw new UsernameNotFoundException("Recruiter not found");
        }

        Job job = new Job();
        mapJobRequestToJob(jobRequest, job);
        job.setRecruiter(recruiter);

        Job savedJob = jobRepository.save(job);
        return mapJobToJobResponse(savedJob);
    }

    public List<JobResponse> getRecruiterJobs(String recruiterEmail) {
        User recruiter = userRepository.findByEmail(recruiterEmail);
        if (recruiter == null) {
            throw new UsernameNotFoundException("Recruiter not found");
        }

        return jobRepository.findByRecruiterIdOrderByCreatedAtDesc(recruiter.getId())
                .stream()
                .map(this::mapJobToJobResponse)
                .collect(Collectors.toList());
    }

    public JobResponse getJobById(Long jobId, String recruiterEmail) {
        Job job = validateAndGetJob(jobId, recruiterEmail);
        return mapJobToJobResponse(job);
    }

    public JobResponse updateJob(Long jobId, JobRequest jobRequest, String recruiterEmail) {
        Job job = validateAndGetJob(jobId, recruiterEmail);
        mapJobRequestToJob(jobRequest, job);

        Job updatedJob = jobRepository.save(job);
        return mapJobToJobResponse(updatedJob);
    }

    public void deleteJob(Long jobId, String recruiterEmail) {
        Job job = validateAndGetJob(jobId, recruiterEmail);
        jobRepository.delete(job);
    }

    private Job validateAndGetJob(Long jobId, String recruiterEmail) {
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        if (!job.getRecruiter().getEmail().equals(recruiterEmail)) {
            throw new RuntimeException("Not authorized to access this job");
        }

        return job;
    }

    private void mapJobRequestToJob(JobRequest request, Job job) {
        job.setJobTitle(request.getJobTitle());
        job.setJobRole(request.getJobRole());
        job.setCompanyName(request.getCompanyName());
        job.setDuration(request.getDuration());
        job.setExperience(request.getExperience());
        job.setJobDescription(request.getJobDescription());
        job.setRequirements(request.getRequirements());
        job.setAdditionalSkills(request.getAdditionalSkills());
        job.setStipend(request.getStipend());
    }

    private JobResponse mapJobToJobResponse(Job job) {
        JobResponse response = new JobResponse();
        response.setId(job.getId());
        response.setJobTitle(job.getJobTitle());
        response.setJobRole(job.getJobRole());
        response.setCompanyName(job.getCompanyName());
        response.setDuration(job.getDuration());
        response.setExperience(job.getExperience());
        response.setJobDescription(job.getJobDescription());
        response.setRequirements(job.getRequirements());
        response.setAdditionalSkills(job.getAdditionalSkills());
        response.setStipend(job.getStipend());
        response.setCreatedAt(job.getCreatedAt());
        response.setRecruiterName(job.getRecruiter().getFullName());
        return response;
    }
}
