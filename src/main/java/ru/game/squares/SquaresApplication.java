package ru.game.squares;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SquaresApplication extends SpringBootServletInitializer {

	private static Class applicationClass = SquaresApplication.class;

	public static void main(String[] args) {
		SpringApplication.run(SquaresApplication.class, args);
	}

}