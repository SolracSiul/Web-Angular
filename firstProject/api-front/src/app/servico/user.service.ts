import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'
import { User } from '../modelo/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Url da Api 
  private url:string = 'http://localhost:8080/'

  //Construtor
  constructor(private http:HttpClient) { }

    //Método para selecionar todos os clientes;
    selecionar():Observable<User[]>{
      return this.http.get<User[]>(this.url);
    }
    //Método para criar um novo usuário;
    cadastrar(obj:User):Observable<User>{
      return this.http.post<User>(this.url, obj)
    }
  
}
