package org.decoders.recruify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class RecruifyApplication {
    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure().load();
        System.out.println(dotenv.get("DB_URL"));
        SpringApplication.run(RecruifyApplication.class, args);
    }
}

