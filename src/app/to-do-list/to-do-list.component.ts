import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  tasks: Task[] = [];
  newTask: string = '';
  nextTaskId = 1;

  addTask() {
    if (this.newTask.trim()) {
      // to check if empty
      this.tasks.push({
        id: this.nextTaskId++,
        name: this.newTask.trim(),
        completed: false,
      });
      this.newTask = '';
    }
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  markAsCompleted(taskId: number) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; //Toggle the task completion state
      }
      return task;
    });
  }
}
