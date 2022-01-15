package com.devsuperior.dsmovie.ettities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user")

public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String email;
	
	public User () {
		
		
	}

	public User(Long id, String amail) {
	
		this.id = id;
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAmail() {
		return email;
	}

	public void setEmail(String amail) {
		this.email = email;
	}
	
}
