import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.css'
})
export class DisciplinasComponent {

  alumni = 'João Silveira'
  semestre = {
    semestre: '',
    disciplinas: [{disciplina: 'carga'}],
  };

  semestres = [
    {
      semestre: '2024/1',
      disciplinas: [{nome: 'Matemática', carga: '72h/aula'},
        {nome: 'Português', carga: '56h/aula'}],
    },
    {
      semestre: '2024/2',
      disciplinas: [{nome: 'Física', carga: '72h/aula'},
        {nome: 'Inglês', carga: '56h/aula'}],
    }
  ];


}
