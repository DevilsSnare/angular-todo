import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message: string = '';
  list:any[] = [];
  addTask(item: string) {
    if(item=="") {
      this.message="uh-oh! you missed to type the task."
    } else {
      if(this.list.find(i=>i.task === item)) {
        this.message='Task already exists in the list!';
      } else {
        this.list.push({id:this.list.length, task: item});
        this.message="Task added!"
      }
    }
  }
  deleteTask(id: number) {
    this.list=this.list.filter(i=>i.id !== id);
  }
}
