import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-apointment',
  templateUrl: './list-apointment.component.html',
  styleUrls: ['./list-apointment.component.css']
})
export class ListApointmentComponent implements OnInit {

  @Input() listAppointmentC: any;
  @Output() deleteCita = new EventEmitter<number>();

  constructor() { 
    console.log(this.listAppointmentC);
  }

  ngOnInit(): void {
  }

  deleteList(i:number):void{
    this.deleteCita.emit(i)
  }

  
}
