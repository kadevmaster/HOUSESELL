import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AddProperty',
  templateUrl: './AddProperty.component.html',
  styleUrls: ['./AddProperty.component.scss']
})
export class AddPropertyComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/'])
  }

}
