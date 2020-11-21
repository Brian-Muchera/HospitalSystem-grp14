import { Component, OnInit } from '@angular/core';

import { AppointmentService } from '../../appointment-service/appointment.service'
import { from } from 'rxjs';
// import { DataService } from '../'
@Component({
  selector: 'app-bookin-form',
  templateUrl: './bookin-form.component.html',
  styleUrls: ['./bookin-form.component.css']
})
export class BookinFormComponent implements OnInit {
 
  appointments;


  constructor(private appointmentService: AppointmentService) { }


  ngOnInit(): void {

    this.appointments = {
      patient:'',
      doctor: '',

      date: '',
      time_alloted: '',

      created_at: '',
      updated_at: ''

    }

  }
    bookAppointments(){
      this.appointmentService.newAppointments(this.appointments).subscribe(
          response => {
            alert('patient ' + this.appointments.patient + ' has been created Successfully!!')

            console.log(response);
            // this.submitted = true;
          },
          error => {
            console.log(error);
          });
    
    
      }
     
    }
  
