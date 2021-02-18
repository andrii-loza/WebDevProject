export interface User {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string | UserAddress;
  flagged?: boolean;
}

export interface UserAddress {
  street: string;
  numberOfHouse: number;
}

export interface TodoUser{
  global: string | TodoUserInfo;
  skills: string | TodoUserSkills;
  rate: string;
  work: string;
  score: number;
}

export interface TodoUserInfo{
  name: string;
  location?: string;
}

export interface TodoUserSkills{
  angular?: string;
  react?: string;
  net?: string;
  more?: string;
}
