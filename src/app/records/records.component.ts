import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  appointments: any;
  currentAppointments = null;
  currentIndex = -1;
  patient = '';
  constructor(private recordService: RecordsService) { }
  ngOnInit(): void {
    this.retrieveAppointments();
  }
  retrieveAppointments() {
    this.recordService.getAll()
      .subscribe(
        data => {
          this.appointments = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrieveAppointments();
    this.currentAppointments = null;
    this.currentIndex = -1;
  }
  setActiveAppointment(appointment, index) {
    this.currentAppointments = appointment;
    this.currentIndex = index;
  }
  removeAllAppointments() {
    this.recordService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAppointments();
        },
        error => {
          console.log(error);
        });
  }
  // ngOnInit() {
  //   this.recordService.sendGetRequest().subscribe((data: any[])=>{
  //     console.log(data);
  //     this.appointments = data;
  //   })
  // }
}