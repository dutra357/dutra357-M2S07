import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.css'
})
export class CadastroAlunoComponent {

  cadastro = {
    nome: "",
    cpf: "",
    email: "",
    celular: "",
    curso: ""
  };
  
  constructor(private router: Router){
    let temp = this.router.getCurrentNavigation()?.extras.state;
    if(temp){
      this.cadastro.nome = temp?.['aluno'].nome;
      this.cadastro.cpf = temp?.['aluno'].cpf;
      this.cadastro.email = temp?.['aluno'].email;
      this.cadastro.celular = temp?.['aluno'].celular;
      this.cadastro.curso = temp?.['aluno'].curso;
    }
  }
 
  salvar() {
    if (this.cadastro.nome && this.cadastro.cpf
      && this.cadastro.email && this.cadastro.celular
      && this.cadastro.curso) {

        localStorage.setItem("novoAluno", JSON.stringify(this.cadastro))
      
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(["alunos"]);
    } else {
      alert('Campos incompletos.');
    }
  }

  recuperarSenha() {
    alert('Processo de recuperação de senha enviado para o e-mail cadastrado');
  }

}
