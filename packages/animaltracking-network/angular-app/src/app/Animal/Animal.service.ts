import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Animal } from '../com.biz';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class AnimalService {

	
		private NAMESPACE: string = 'com.biz.Animal';
	



    constructor(private dataService: DataService<Animal>) {
    };

    public getAll(): Observable<Animal[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Animal> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Animal> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Animal> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Animal> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
