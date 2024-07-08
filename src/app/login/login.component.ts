import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    email: "",
    senha: ""
  };

  entrar() {
    if ((this.login.email != null) && (this.login.senha != null)) {
      window.location.href = "/home";
    } else {
      alert('Campos em branco!');
    }
  }

  recuperarSenha() {
    alert('Processo de recuperação de senha enviado para o e-mail cadastrado');
  }
}
