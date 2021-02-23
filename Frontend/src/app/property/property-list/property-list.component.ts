import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }
  propertys: Array<any> =[
  {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":2,
    "Name":"shop House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":3,
    "Name":"mart House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":4,
    "Name":"sport House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":5,
    "Name":"vila House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":6,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  }
]

  ngOnInit(): void {
  }

}
