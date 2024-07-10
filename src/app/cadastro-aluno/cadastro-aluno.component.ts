import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
 
  salvar() {
    if (this.cadastro.nome && this.cadastro.cpf
      && this.cadastro.email && this.cadastro.celular
      && this.cadastro.curso) {

        localStorage.setItem("novoAluno", JSON.stringify(this.cadastro))
      
        window.location.href = "/alunos";
        alert('Cadastro realizado com sucesso!');
    } else {
      alert('Campos incompletos.');
    }
  }

  recuperarSenha() {
    alert('Processo de recuperação de senha enviado para o e-mail cadastrado');
  }

}
