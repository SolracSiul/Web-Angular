import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modelo/User';
import { UserService } from '../servico/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Objeto do tipo Usuario
  usuario = new User();
  
  //Variável para visibilidade dos botões;
  btnCadastro:boolean = true;
  //Json pegando os dados da API;

  usuarios:User[] = [];

  //Constructor para ter acesso aos métodos do service
  constructor(private servico:UserService){}

  //Método para selecionar a lista de usuários
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.usuarios = retorno);
  }

  //Método para cadastro de usuários
  cadastrar():void{
    this.servico.cadastrar(this.usuario)
    .subscribe(retorno => {
      
      //Cadastrando usuários na lista de usuários
      this.usuarios.push(retorno);})

      //Como limpar o formulário atual ? 
      this.usuario = new User();

      //Agora Avise que foi cadastrado
      alert('Cliente cadastrado com sucesso!')
  }
  
  
  //Método de INicialização;
  ngOnInit(){
    this.selecionar();
  }

}
