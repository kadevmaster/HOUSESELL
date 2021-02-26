import { from } from 'rxjs';
import { Router} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Add-Property',
  templateUrl: './AddProperty.component.html',
  styleUrls: ['./AddProperty.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm: NgForm;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/'])
  }

  onSubmit()
  {
console.log("show some thing");
console.log(this.addPropertyForm);
  }

}
