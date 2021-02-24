import { Iproperty } from './../property/IProperty,Interface';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  //constructor and add http
  constructor(private http: HttpClient) { }
  getAllPropertys(): Observable<Iproperty[]>{
    return this.http.get("data/propertys.json").pipe(
      map(data=>{
        const propertysArray : Array<Iproperty>=[];
        for (const id in data){
          if (data.hasOwnProperty(id)){
            propertysArray.push(data[id]);
          }
        }
        return propertysArray;
      })
    )
  }
}
