package com.ecommerce.config;


import com.ecommerce.tools.security.JwtFilter;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableAutoConfiguration
@ComponentScan
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/checkout/**", "/admin/**");

		return registrationBean;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.headers().cacheControl();
		http
			.csrf().disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.authorizeRequests()
			.antMatchers(
				"/books/**", "/ebooks/**", "/audiobooks/**", "/customer/**", "/register/**", "/order/**"
			).permitAll()
			.antMatchers("/auth").permitAll();

		http.headers().cacheControl();
	}

}
