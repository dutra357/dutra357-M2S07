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

  buscar() {
    if (this.temp != null) {
      var temp2 = JSON.parse(this.temp);
      console.log(temp2)
    }
  }
}
