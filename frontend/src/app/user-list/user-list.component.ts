import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService, User } from '../user.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [MessageService]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayDialog: boolean = false;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private messageService: MessageService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser() {
    this.displayDialog = true;
  }

  saveUser() {
    if (this.userForm.valid) {
      const newUser: Omit<User, 'id'> = this.userForm.value;
      this.userService.addUser(newUser).subscribe({
        next: (user) => {
          this.users.push(user);
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'O usuário foi criado com sucesso' });
          this.displayDialog = false;
          this.userForm.reset();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao adicionar o usuário' });
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Por favor, preencha o formulário corretamente' });
    }
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'O usuário foi excluído com sucesso' });
    });
  }

  cancel() {
    this.displayDialog = false;
    this.userForm.reset();
  }
}
