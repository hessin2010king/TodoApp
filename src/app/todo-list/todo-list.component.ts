import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() todoDeleted = new EventEmitter<number>(); // EventEmitter emitting number
  @Output() todoToggled = new EventEmitter<Todo>(); // EventEmitter emitting Todo

  deleteTodo(todoId: number): void {
    this.todoDeleted.emit(todoId); // Emit event with Todo ID
  }

  toggleTodoCompletion(todo: Todo): void {
    this.todoToggled.emit(todo); // Emit event with Todo object
  }
}
