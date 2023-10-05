export type UserType = {
  name?: string;
  number?: number;
  adress?: string;
  customizable?: {
    contratado?: boolean;
    price?: number;
  };
  largeStorage?: {
    contratado?: boolean;
    price?: number;
  };
  onlineService?: {
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
