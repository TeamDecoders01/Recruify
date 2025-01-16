package org.decoders.recruify.repository;

import org.decoders.recruify.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    List<Job> findByRecruiterId(Long recruiterId);
    List<Job> findByRecruiterIdOrderByCreatedAtDesc(Long recruiterId);
}
