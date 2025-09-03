package org.example.kinopback.Security.Configuration;

/*
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
*/

import java.util.ArrayList;
import java.util.List;


/*@Configuration
@EnableWebSecurity*/
public class SecurityConfig {
  /*@Value("${security.logins}")
  private List<String> logins;
  @Value("${security.passwords}")
  private List<String> passwords;
  @Value("${security.roles}")
  private List<String> roles;

  @Bean
  public UserDetailsService userDetailsService(PasswordEncoder encoder) {
    List<UserDetails> userDetailList = new ArrayList<>();
    for (int i = 0; i < logins.size(); i++)
      if (passwords.get(i) != null && roles.get(i) != null)
        userDetailList.add(User.builder().username(logins.get(i)).password(encoder.encode(passwords.get(i))).roles(roles.get(i)).build());
    return new InMemoryUserDetailsManager(userDetailList);
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable)
      .authorizeHttpRequests((requests) -> requests
        .requestMatchers("/projects**").hasRole("ADMIN")
        .anyRequest().authenticated())
      .formLogin((form) -> form
        .defaultSuccessUrl("/projects")
        .permitAll()).csrf().disable();
    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }*/
}
