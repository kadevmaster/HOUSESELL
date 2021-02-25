import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Property-Detail',
  templateUrl: './Property-Detail.component.html',
  styleUrls: ['./Property-Detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId:number;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe((paramas) => {
      this.propertyId= +paramas['id'];
    })
  }

  onSelectNext(){
    this.propertyId +=1;
    this.router.navigate(['property-detail', this.propertyId])
  }

}
