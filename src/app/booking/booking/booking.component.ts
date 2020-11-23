import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AppointmentserviceService } from 'src/app/appointments/appointmentservice.service'


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  appointments;


  constructor(private appointmentService: AppointmentserviceService) { }


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
  

