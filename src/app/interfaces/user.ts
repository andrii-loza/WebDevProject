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
