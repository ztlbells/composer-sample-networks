// export namespace org.acme.vehicle.lifecycle.manufacturer{
   export enum OrderStatus {
      PLACED,
      SCHEDULED_FOR_MANUFACTURE,
      VIN_ASSIGNED,
      OWNER_ASSIGNED,
      DELIVERED,
   }
   export class Manufacturer extends Business {
      companyId: string;
   }
   export class Order {
      orderId: string;
      vehicleDetails: VehicleDetails;
      orderStatus: OrderStatus;
      manufacturer: Manufacturer;
      orderer: Person;
      statusUpdates: UpdateOrderStatus[];
   }
   export class PlaceOrder {
      transactionId: string;
      orderId: string;
      vehicleDetails: VehicleDetails;
      manufacturer: Manufacturer;
      orderer: Person;
      timestamp: Date;
   }
   export class UpdateOrderStatus {
      transactionId: string;
      orderStatus: OrderStatus;
      vin: string;
      v5c: string;
      numberPlate: string;
      order: Order;
      timestamp: Date;
   }
// }
