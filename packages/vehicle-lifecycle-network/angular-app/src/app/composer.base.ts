// export namespace composer.base{
   export enum Gender {
      MALE,
      FEMALE,
      OTHER,
   }
   export abstract class Person {
      title: string;
      firstName: string;
      lastName: string;
      middleNames: string[];
      gender: Gender;
      nationalities: string[];
      contactDetails: ContactDetails;
      birthDetails: BirthDetails;
      deathDetails: DeathDetails;
   }
   export class ContactDetails {
      email: string;
      mobilePhone: string;
      homePhone: string;
      address: Address;
   }
   export class BirthDetails {
      dateOfBirth: Date;
      placeOfBirth: string;
   }
   export class DeathDetails {
      dateOfDeath: Date;
      placeOfDeath: string;
   }
   export class Address {
      city: string;
      country: string;
      locality: string;
      region: string;
      street: string;
      street2: string;
      street3: string;
      postalCode: string;
      postOfficeBoxNumber: string;
   }
// }
