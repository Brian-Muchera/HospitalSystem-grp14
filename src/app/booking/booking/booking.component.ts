import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AppointmentsService } from 'src/app/appointments/appointments.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  appointments;
  clearForm(){
    (<HTMLFormElement>document.getElementById("book")).reset();
    console.log("book")
   }

  constructor(private appointmentService: AppointmentsService) { }


  ngOnInit(): void {

    this.appointments = {
      patient:'',
      doctor: '',

      date: '',
      time_alloted: '',

      //created_at: '',
     // updated_at: ''

    }

  }
  
    bookAppointments(){
      this.appointmentService.newAppointments(this.appointments).subscribe(
          response => {
            alert('Appointment ' + this.appointments.patient + ' has been booked Successfully!!')
    this.clearForm()
            console.log(response);
            // this.submitted = true;
          },
          error => {
            console.log(error);
          });
    
    
      }
      onSubmit() {
        if (this.appointments.valid) {
          this.clearForm()
         // console.log("Form Submitted!");
       //   this.appointments.reset();
        }
      }
     
    }
  
