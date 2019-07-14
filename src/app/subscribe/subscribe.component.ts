import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  constructor(private _router : Router) { }

 openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  onSubmit(){
    document.getElementById("myForm").style.display = "none";
    
    this._router.navigateByUrl('/links');
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
    console.log("closing form");
    this._router.navigateByUrl('/links');
  }

  ngOnInit() {
  }

}
