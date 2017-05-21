// export namespace org.acme.vehicle.lifecycle{
   export class PrivateOwner extends Person {
      email: string;
   }
   export class Company extends Business {
      companyId: string;
   }
   export class Regulator extends Company {
   }
   export class AuctionHouse extends Company {
   }
   export class ScrapMerchant extends Company {
   }
   export class SetupDemo {
      transactionId: string;
      timestamp: Date;
   }
// }
