package org.mbsampling.mbs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "org.mbsampling.mbs")
@EnableJpaRepositories(basePackages = "org.mbsampling.mbs.Repository")

public class MutliBrandSamplingApplication {

    public static void main(String[] args) {
        SpringApplication.run(MutliBrandSamplingApplication.class, args);
    }

}
