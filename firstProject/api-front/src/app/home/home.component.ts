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

  //Variaável para visibilidade da tabela
  tabela:boolean = true;

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
  //Método para selecionar um cliente em específico:
  selecionarCliente(posicao:number):void{

    //Selecionar cliente no vetor;
    this.usuario=this.usuarios[posicao];

    //visibility hidden em botão e tabela: 
    this.btnCadastro = false;
    this.tabela = false;

  }
  //Método Put atrelado agora ao botão Alterar: 
  editar():void{
    this.servico.editar(this.usuario)
    .subscribe(retorno => {
      //Pegar posicao do vetor onde está o cliente 
      let posicao = this.usuarios.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });
      this.usuarios[posicao] = retorno;

      //Visibilidade dos Botoes;
      this.btnCadastro = true;
      
      //Visibilidade da tabela:
      this.tabela = true;
      
      //Como limpar o formulário atual ? 
      this.usuario = new User();

      alert('Cliente alterado com sucesso')

    })
  }
  // Método para remoção de usuários: 
  remover():void{
    this.servico.remover(this.usuario)
    .
  }
  
  //Método de Inicialização parecido com UseEffect;
  ngOnInit(){
    this.selecionar();
  }

}
