import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  newTodoTitle: string = '';
  @Output() todoAdded = new EventEmitter<Todo>();

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle,
        isCompleted: false
      };
      this.todoAdded.emit(newTodo); // Emit a Todo object
      this.newTodoTitle = '';
    }
  }
}
