// export namespace composer.business{
   export abstract class Business {
      headquarters: Address;
      name: string;
      managers: Manager[];
   }
   export abstract class Employee extends Person {
      employer: Business;
      manager: Manager;
      startDate: Date;
      employmentStatus: string;
      department: string;
      jobRole: string;
   }
   export abstract class Manager extends Employee {
      directReports: Employee[];
   }
// }
