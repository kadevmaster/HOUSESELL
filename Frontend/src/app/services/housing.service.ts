import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { IProperty } from '../model/Iproperty';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  //constructor and add http
  constructor(private http: HttpClient) { }
  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get("data/properties.json").pipe(
      map(data=>{
        const propertiesArray : Array<IProperty>=[];
        const localPropertiess = JSON.parse(localStorage.getItem('newProp'))

        if(localPropertiess)
        {
          for (const id in localPropertiess){
            if (localPropertiess.hasOwnProperty(id) && localPropertiess[id].SellRent === SellRent){
              propertiesArray.push(localPropertiess[id]);
            }
          }
        }

        for (const id in data){
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
    return this.http.get<IProperty[]>('data/properties.json');
  }
  addProperty(property: Property) {
    let newProp = [property];

    // Add new property in array if newProp already exists in local storage
    if(localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))]
    }
    localStorage.setItem('newProp', JSON.stringify(property));
  }

  newPropID(){
    if(localStorage.getItem('PID')){
      return +localStorage.getItem('PID')+1;

    }else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}
