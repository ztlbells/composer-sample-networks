import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OrderService } from './Order.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Order',
	templateUrl: './Order.component.html',
	styleUrls: ['./Order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      orderId = new FormControl("", Validators.required);
  
      vehicleDetails = new FormControl("", Validators.required);
  
      orderStatus = new FormControl("", Validators.required);
  
      manufacturer = new FormControl("", Validators.required);
  
      orderer = new FormControl("", Validators.required);
  
      statusUpdates = new FormControl("", Validators.required);
  


  constructor(private serviceOrder:OrderService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          orderId:this.orderId,
        
    
        
          vehicleDetails:this.vehicleDetails,
        
    
        
          orderStatus:this.orderStatus,
        
    
        
          manufacturer:this.manufacturer,
        
    
        
          orderer:this.orderer,
        
    
        
          statusUpdates:this.statusUpdates
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceOrder.getAll()
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
      $class: "org.acme.vehicle.lifecycle.manufacturer.Order",
      
        
          "orderId":this.orderId.value,
        
      
        
          "vehicleDetails":this.vehicleDetails.value,
        
      
        
          "orderStatus":this.orderStatus.value,
        
      
        
          "manufacturer":this.manufacturer.value,
        
      
        
          "orderer":this.orderer.value,
        
      
        
          "statusUpdates":this.statusUpdates.value
        
      
    };

    this.myForm.setValue({
      
        
          "orderId":null,
        
      
        
          "vehicleDetails":null,
        
      
        
          "orderStatus":null,
        
      
        
          "manufacturer":null,
        
      
        
          "orderer":null,
        
      
        
          "statusUpdates":null
        
      
    });

    return this.serviceOrder.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "orderId":null,
        
      
        
          "vehicleDetails":null,
        
      
        
          "orderStatus":null,
        
      
        
          "manufacturer":null,
        
      
        
          "orderer":null,
        
      
        
          "statusUpdates":null 
        
      
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
      $class: "org.acme.vehicle.lifecycle.manufacturer.Order",
      
        
          
        
    
        
          
            "vehicleDetails":this.vehicleDetails.value,
          
        
    
        
          
            "orderStatus":this.orderStatus.value,
          
        
    
        
          
            "manufacturer":this.manufacturer.value,
          
        
    
        
          
            "orderer":this.orderer.value,
          
        
    
        
          
            "statusUpdates":this.statusUpdates.value
          
        
    
    };

    return this.serviceOrder.updateAsset(form.get("orderId").value,this.asset)
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

    return this.serviceOrder.deleteAsset(this.currentId)
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

    return this.serviceOrder.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "orderId":null,
          
        
          
            "vehicleDetails":null,
          
        
          
            "orderStatus":null,
          
        
          
            "manufacturer":null,
          
        
          
            "orderer":null,
          
        
          
            "statusUpdates":null 
          
        
      };



      
        if(result.orderId){
          formObject.orderId = result.orderId;
        }else{
          formObject.orderId = null;
        }
      
        if(result.vehicleDetails){
          formObject.vehicleDetails = result.vehicleDetails;
        }else{
          formObject.vehicleDetails = null;
        }
      
        if(result.orderStatus){
          formObject.orderStatus = result.orderStatus;
        }else{
          formObject.orderStatus = null;
        }
      
        if(result.manufacturer){
          formObject.manufacturer = result.manufacturer;
        }else{
          formObject.manufacturer = null;
        }
      
        if(result.orderer){
          formObject.orderer = result.orderer;
        }else{
          formObject.orderer = null;
        }
      
        if(result.statusUpdates){
          formObject.statusUpdates = result.statusUpdates;
        }else{
          formObject.statusUpdates = null;
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
      
        
          "orderId":null,
        
      
        
          "vehicleDetails":null,
        
      
        
          "orderStatus":null,
        
      
        
          "manufacturer":null,
        
      
        
          "orderer":null,
        
      
        
          "statusUpdates":null 
        
      
      });
  }

}
