export type ActivityType = {
  account_id: number;
  amount: number;
  dated: string;
  description: string;
  destination: string;
  id: number;
  origin: string;
  type: string;
};

export type CardServiceData = {
  id: number;
  name: string;
  date: string;
  invoice_value: number;
};

export type AccountType = {
  alias: string;
  available_amount: number;
  cvu: string;
  id: number;
  user_id: number;
};

export type CardTypeProps = {
  token: string;
  accountId: number;
};

export type CardType = {
  account_id: number;
  cod: number;
  expiration_date: string;
  first_last_name: string;
  id: number;
  number_id: number;
};

export type CardActivityProps = {
  id: number;
  destination: string;
  amount: number;
  dated: string;
  type: string;
  accountId: number;
};

export type DeleteCardButtonProps = {
  token: string;
  accountId: number;
  cardId: number;
};

export type UserType = {
  id: number;
  dni: string;
  email: string;
  phone: string;
  firstname: string;
  lastname: string;
};
