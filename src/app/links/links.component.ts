import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

    constructor() { }

     openForm() {
      document.getElementById("myForm").style.display = "block";
    }
    
    closeForm() {
      document.getElementById("myForm").style.display = "none";
    }

  ngOnInit() {
  }

}
