
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export enum LandingOption {
  CATALOGUE = 'CATALOGUE',
  CONTACT = 'CONTACT'
}

export type View = 'home' | 'about' | 'contact';

export interface InquiryFormData {
  fullName?: string;
  companyName: string;
  email: string;
  country: string;
  phone: string;
  message?: string;
  contactPerson?: string;
}
