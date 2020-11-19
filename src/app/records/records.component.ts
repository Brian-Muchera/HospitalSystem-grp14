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

  constructor(private recordService: RecordsService) { }

  ngOnInit(): void {
    this.retrieveAppointments();
  }
  retrieveAppointments(): void {
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

  // ngOnInit() {
  //   this.recordService.sendGetRequest().subscribe((data: any[])=>{
  //     console.log(data);
  //     this.appointments = data;
  //   })
  // }

}
