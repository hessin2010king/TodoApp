import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSource = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSource.asObservable();

  private allTodos: Todo[] = []; // Initialize with an empty array or default data

  constructor() {
    this.todosSource.next(this.allTodos); // Initialize with default data
  }

  addTodo(todo: Todo): void {
    this.allTodos = [...this.allTodos, todo];
    this.todosSource.next(this.allTodos);
  }

  deleteTodo(todoId: number): void {
    this.allTodos = this.allTodos.filter(todo => todo.id !== todoId);
    this.todosSource.next(this.allTodos);
  }

  toggleCompletion(todo: Todo): void {
    this.allTodos = this.allTodos.map(t => 
      t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    this.todosSource.next(this.allTodos);
  }
}
