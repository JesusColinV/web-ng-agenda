import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-apointment',
  templateUrl: './create-apointment.component.html',
  styleUrls: ['./create-apointment.component.css']
})
export class CreateApointmentComponent implements OnInit {

  name: string ='';
  date: string ='';
  time: string ='';
  syntoms: string ='';

  formError: boolean = false;

  @Output() newAppointment = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  
  createAppointment(){
    if(this.name == '' || this.date == '' || this.time == '' || this.syntoms == ''){
      this.formError = true;
      return;
    }else{
      this.formError = false;
    }


    const DATA = {
      name: this.name,
      date: this.date,
      time: this.time,
      syntoms: this.syntoms
    }

    // console.log(DATA)
    this.newAppointment.emit(DATA)
    this.deleteData();
  }

  deleteData():void{
    this.name = '';
    this.date = '';
    this.time = '';
    this.syntoms = '';
  }

  
}
