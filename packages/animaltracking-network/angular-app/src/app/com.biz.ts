// export namespace com.biz{
   export enum AnimalType {
      SHEEP_GOAT,
      CATTLE,
      PIG,
      DEER_OTHER,
   }
   export enum MovementStatus {
      IN_FIELD,
      IN_TRANSIT,
   }
   export enum ProductionType {
      MEAT,
      WOOL,
      DAIRY,
      BREEDING,
      OTHER,
   }
   export abstract class User {
      email: string;
      firstName: string;
      lastName: string;
   }
   export class Farmer extends User {
      address1: string;
      address2: string;
      county: string;
      postcode: string;
      business: Business;
   }
   export class Regulator extends User {
   }
   export class Field {
      cph: string;
      name: string;
      business: Business;
   }
   export class Animal {
      animalId: string;
      species: AnimalType;
      movementStatus: MovementStatus;
      productionType: ProductionType;
      location: Field;
      owner: Farmer;
   }
   export class Business {
      sbi: string;
      address1: string;
      address2: string;
      county: string;
      postcode: string;
      owner: Farmer;
      incomingAnimals: Animal[];
   }
   export abstract class AnimalMovement {
      transactionId: string;
      logs: string[];
      animal: Animal;
      from: Business;
      to: Business;
      timestamp: Date;
   }
   export class AnimalMovementDeparture extends AnimalMovement {
      fromField: Field;
   }
   export class AnimalMovementArrival extends AnimalMovement {
      arrivalField: Field;
   }
   export class SetupDemo {
      transactionId: string;
      timestamp: Date;
   }
// }
