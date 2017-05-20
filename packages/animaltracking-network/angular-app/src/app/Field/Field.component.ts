import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FieldService } from './Field.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Field',
	templateUrl: './Field.component.html',
	styleUrls: ['./Field.component.css'],
  providers: [FieldService]
})
export class FieldComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      cph = new FormControl("", Validators.required);
  
      name = new FormControl("", Validators.required);
  
      business = new FormControl("", Validators.required);
  


  constructor(private serviceField:FieldService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          cph:this.cph,
        
    
        
          name:this.name,
        
    
        
          business:this.business
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceField.getAll()
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
      $class: "com.biz.Field",
      
        
          "cph":this.cph.value,
        
      
        
          "name":this.name.value,
        
      
        
          "business":this.business.value
        
      
    };

    this.myForm.setValue({
      
        
          "cph":null,
        
      
        
          "name":null,
        
      
        
          "business":null
        
      
    });

    return this.serviceField.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "cph":null,
        
      
        
          "name":null,
        
      
        
          "business":null 
        
      
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
      $class: "com.biz.Field",
      
        
          
        
    
        
          
            "name":this.name.value,
          
        
    
        
          
            "business":this.business.value
          
        
    
    };

    return this.serviceField.updateAsset(form.get("cph").value,this.asset)
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

    return this.serviceField.deleteAsset(this.currentId)
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

    return this.serviceField.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "cph":null,
          
        
          
            "name":null,
          
        
          
            "business":null 
          
        
      };



      
        if(result.cph){
          formObject.cph = result.cph;
        }else{
          formObject.cph = null;
        }
      
        if(result.name){
          formObject.name = result.name;
        }else{
          formObject.name = null;
        }
      
        if(result.business){
          formObject.business = result.business;
        }else{
          formObject.business = null;
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
      
        
          "cph":null,
        
      
        
          "name":null,
        
      
        
          "business":null 
        
      
      });
  }

}
