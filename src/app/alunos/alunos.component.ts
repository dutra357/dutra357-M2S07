import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';

interface DadosAluno {
  nome: string,
  cpf: string,
  email: string,
  celular: string,
  curso: string,
  selecionado: boolean
}

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})


export class AlunosComponent {
  dadosAluno: DadosAluno[] = [];
  campoBusca: string = '';
  editado?: {};

  constructor(private router: Router) {
    const novoAluno = localStorage.getItem("novoAluno");
    if (novoAluno) {
      this.dadosAluno.unshift(JSON.parse(novoAluno));
    }
  }

  buscar() {
    console.log(this.dadosAluno)
  }

  // pesquisar(): void {
  //   if (this.campoBusca) {
  //     this.filteredStudents = this.students.filter(student =>
  //       student.fullName.toLowerCase().includes(this.campoBusca.toLowerCase()) ||
  //       student.email.toLowerCase().includes(this.campoBusca.toLowerCase())
  //     );
  //   } else {
  //     this.filteredStudents = [...this.students];
  //   }
  // }

  excluir() {
    let confirmacao = confirm("Deseja mesmo excluir esse usuário?");
    if (confirmacao) {
      localStorage.removeItem("novoAluno")
      window.location.href = "/alunos";
    }
  }

  editar(aluno: any) {
    this.router.navigate(['/cadastroAlunos'], { state: {aluno} });
  }



}
