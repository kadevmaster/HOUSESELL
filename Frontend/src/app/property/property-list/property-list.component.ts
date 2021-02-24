import { Iproperty } from './../IProperty,Interface';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit {
  constructor(private housingService:HousingService) {}

  propertys: Array<Iproperty>;

  ngOnInit(): void {
    this.housingService.getAllPropertys().subscribe(
      (data) => {
        this.propertys = data;
        console.log(data);
      }, error =>{console.error(error);
      }
      );
  }
}
