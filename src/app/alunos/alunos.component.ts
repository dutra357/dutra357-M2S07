import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {

  temp = localStorage.getItem('novoAluno');

  //JSON.parse(localStorage.getItem('novoAluno')).nome

  buscar() {
    let temp2 = {};
    if (this.temp != null) {
      temp2 = JSON.parse(this.temp);
      console.log(temp2)
    }

  }
}
