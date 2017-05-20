// export namespace org.acme.shipping.perishable{
   export enum ProductType {
      BANANAS,
      APPLES,
      PEARS,
      PEACHES,
      COFFEE,
   }
   export enum ShipmentStatus {
      CREATED,
      IN_TRANSIT,
      ARRIVED,
   }
   export abstract class ShipmentTransaction {
      transactionId: string;
      shipment: Shipment;
      timestamp: Date;
   }
   export class TemperatureReading extends ShipmentTransaction {
      centigrade: number;
   }
   export class ShipmentReceived extends ShipmentTransaction {
   }
   export class Shipment {
      shipmentId: string;
      type: ProductType;
      status: ShipmentStatus;
      unitCount: number;
      temperatureReadings: TemperatureReading[];
      contract: Contract;
   }
   export class Contract {
      contractId: string;
      grower: Grower;
      shipper: Shipper;
      importer: Importer;
      arrivalDateTime: Date;
      unitPrice: number;
      minTemperature: number;
      maxTemperature: number;
      minPenaltyFactor: number;
      maxPenaltyFactor: number;
   }
   export class Address {
      city: string;
      country: string;
      street: string;
      zip: string;
   }
   export abstract class Business {
      email: string;
      address: Address;
      accountBalance: number;
   }
   export class Grower extends Business {
   }
   export class Shipper extends Business {
   }
   export class Importer extends Business {
   }
   export class SetupDemo {
      transactionId: string;
      timestamp: Date;
   }
// }
