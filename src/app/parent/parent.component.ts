import { Component } from '@angular/core';
import { Todo } from '../todo.model'; // Import the Todo model
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  todos: Todo[] = []; // Define todos array with Todo type

  constructor(private todoService: TodoService) {
    this.todoService.todos$.subscribe(todos => this.todos = todos);
  }

  addTask(todo: Todo) { // Ensure this method accepts a Todo
    this.todoService.addTodo(todo);
  }

  deleteTask(todoId: number) { // Ensure this method accepts a number
    this.todoService.deleteTodo(todoId);
  }

  toggleTask(todo: Todo) { // Ensure this method accepts a Todo
    this.todoService.toggleCompletion(todo);
  }
}
