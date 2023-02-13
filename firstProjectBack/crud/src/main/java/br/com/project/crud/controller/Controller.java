package br.com.project.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.project.crud.models.User;
import br.com.project.crud.repository.Repositorio;

@RestController
@CrossOrigin(origins="*")
public class Controller {
	
	@Autowired
	private Repositorio metodos;
	
	@GetMapping("/")
	public Iterable<User> listar() {
		return metodos.findAll();
	}
	
	@PostMapping("/")
	public User cadastrar(@RequestBody User obj) {
		return metodos.save(obj);
	}
	
	@PutMapping("/")
	public User editar(@RequestBody User obj) {
		return metodos.save(obj);
	}
	
	@DeleteMapping("/{codigo}")
	public void remover(@PathVariable long codigo) {
		 metodos.deleteById(codigo);
	}
	
}
