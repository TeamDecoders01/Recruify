package org.decoders.recruify;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RecruifyApplication {
    public static void main(String[] args) {
        Dotenv.configure().directory("backend").load().entries()
                .forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
        SpringApplication.run(RecruifyApplication.class, args);
    }
}
