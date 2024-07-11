import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  sair() {

    let confirmacao = confirm("Deseja realmente sair?");
    if (confirmacao) {
      //deslogar
      this.router.navigate(["login"]);
    }
  }

  path = 'https://img.icons8.com/?size=100&id=42763&format=png&color=000000'
  usuario = 'Joao Silveira'

}
