import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  logado: boolean = false;

  constructor(private router: Router) {
  }

  disciplinas() {
    this.router.navigate(["disciplinas"]);
  }

  alunos() {
    if (this.logado) {
      this.router.navigate(["alunos"]);
    }
  }

}
