package br.com.project.crud.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.project.crud.models.User;

@Repository
public interface Repositorio extends CrudRepository<User, Long>{

	public List<User> findAll();
	
	
}
