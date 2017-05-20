import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AnimalService } from './Animal.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Animal',
	templateUrl: './Animal.component.html',
	styleUrls: ['./Animal.component.css'],
  providers: [AnimalService]
})
export class AnimalComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      animalId = new FormControl("", Validators.required);
  
      species = new FormControl("", Validators.required);
  
      movementStatus = new FormControl("", Validators.required);
  
      productionType = new FormControl("", Validators.required);
  
      location = new FormControl("", Validators.required);
  
      owner = new FormControl("", Validators.required);
  


  constructor(private serviceAnimal:AnimalService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          animalId:this.animalId,
        
    
        
          species:this.species,
        
    
        
          movementStatus:this.movementStatus,
        
    
        
          productionType:this.productionType,
        
    
        
          location:this.location,
        
    
        
          owner:this.owner
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceAnimal.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "com.biz.Animal",
      
        
          "animalId":this.animalId.value,
        
      
        
          "species":this.species.value,
        
      
        
          "movementStatus":this.movementStatus.value,
        
      
        
          "productionType":this.productionType.value,
        
      
        
          "location":this.location.value,
        
      
        
          "owner":this.owner.value
        
      
    };

    this.myForm.setValue({
      
        
          "animalId":null,
        
      
        
          "species":null,
        
      
        
          "movementStatus":null,
        
      
        
          "productionType":null,
        
      
        
          "location":null,
        
      
        
          "owner":null
        
      
    });

    return this.serviceAnimal.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "animalId":null,
        
      
        
          "species":null,
        
      
        
          "movementStatus":null,
        
      
        
          "productionType":null,
        
      
        
          "location":null,
        
      
        
          "owner":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.biz.Animal",
      
        
          
        
    
        
          
            "species":this.species.value,
          
        
    
        
          
            "movementStatus":this.movementStatus.value,
          
        
    
        
          
            "productionType":this.productionType.value,
          
        
    
        
          
            "location":this.location.value,
          
        
    
        
          
            "owner":this.owner.value
          
        
    
    };

    return this.serviceAnimal.updateAsset(form.get("animalId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceAnimal.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceAnimal.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "animalId":null,
          
        
          
            "species":null,
          
        
          
            "movementStatus":null,
          
        
          
            "productionType":null,
          
        
          
            "location":null,
          
        
          
            "owner":null 
          
        
      };



      
        if(result.animalId){
          formObject.animalId = result.animalId;
        }else{
          formObject.animalId = null;
        }
      
        if(result.species){
          formObject.species = result.species;
        }else{
          formObject.species = null;
        }
      
        if(result.movementStatus){
          formObject.movementStatus = result.movementStatus;
        }else{
          formObject.movementStatus = null;
        }
      
        if(result.productionType){
          formObject.productionType = result.productionType;
        }else{
          formObject.productionType = null;
        }
      
        if(result.location){
          formObject.location = result.location;
        }else{
          formObject.location = null;
        }
      
        if(result.owner){
          formObject.owner = result.owner;
        }else{
          formObject.owner = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "animalId":null,
        
      
        
          "species":null,
        
      
        
          "movementStatus":null,
        
      
        
          "productionType":null,
        
      
        
          "location":null,
        
      
        
          "owner":null 
        
      
      });
  }

}
