import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { Todo } from './todo.model'; // Import Todo model

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TodoInputComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todos: Todo[] = []; // Define todos array with Todo type

  constructor(private todoService: TodoService) {
    this.todoService.todos$.subscribe(todos => this.todos = todos);
  }

  onTodoAdded(todo: Todo) { // Ensure this method accepts a Todo
    this.todoService.addTodo(todo);
  }

  onTodoDeleted(todoId: number) { // Ensure this method accepts a number
    this.todoService.deleteTodo(todoId);
  }

  onTodoToggled(todo: Todo) { // Ensure this method accepts a Todo
    this.todoService.toggleCompletion(todo);
  }
}
