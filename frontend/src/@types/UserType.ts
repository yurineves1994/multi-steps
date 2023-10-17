export type UserType = {
  name?: string;
  phone?: string;
  email?: string;
  services?: [];
  customizable?: {
    name?: string;
    contratado?: boolean;
    price?: number;
  };
  largeStorage?: {
    name?: string;
    contratado?: boolean;
    price?: number;
  };
  onlineService?: {
    name?: string;
    contratado?: boolean;
    price?: number;
  };
  period?: string;
  plan?: {
    period?: boolean;
    price?: number;
    type?: string;
  };
  total?: number;
};
