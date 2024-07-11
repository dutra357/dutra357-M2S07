import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  aluno = "João Silveira";

  atividades = [
    'atividade01', 'atividade02', 'atividade03', 'atividade04'
  ];

  extras = [
    'Língua Estrangeira', 'Programação - JAVA', 'Seminário' 
  ];

  disciplinas = [
    'Cálculo I', 'Cálculo II', 'Mecânica dos Sólidos' 
  ];

}
