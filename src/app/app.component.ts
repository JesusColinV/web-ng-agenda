import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listAppointment : any[]=[];

  addAppintment(data:any){
    console.log("father");
    
    this.listAppointment.push(data);
    
  }

  deleteCitaList(i:number):void{
    this.listAppointment.splice(i,1);
  }
}
