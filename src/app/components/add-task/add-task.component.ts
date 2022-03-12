import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;

  text: string = "";
  day: string = "";
  reminder: boolean = false;


  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.text.length === 0) {
      alert("no puede ir vacio");
      return
    }

    const {text, day, reminder} = this;
    const newTask = {text, day, reminder}

    this.onAddTask.emit(newTask);
  }

}
