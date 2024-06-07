export interface Member {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  city: string;
  documentType: string;
  documentNumber: string;
  countryCode: string;
  phoneNumber: string;
  occupation: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  status: string;
}

export interface Supplier {
  id: number;
  name: string;
  category: string;
  address: string;
  accountManager: string;
  accountManager2: string;
  phoneNumber: string;
  email: string;
}

export interface Service {
  id: number;
  service: string;
  subService: string;
  name: string;
  username: string;
  address: string;
  city: string;
  company: string;
  accountManagerName: string;
  phoneNumber: string;
}

export interface Itineraries {
  id: number;
  itineraries: string;
  subItineraries: string;
  name: string;
  lastName: string;
  nationality: string;
  supplierName: string;
  category: string;
  subcategory: string;
  price: number;
  people: number;
}
