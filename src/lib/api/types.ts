export interface Profile {
  pk: string;
  username: string;
  tgid: number;
  chatgpt_daily_limit: number;
  dalle_2_daily_limit: number;
  sd_daily_limit: number;
  email: string;
  token_balance: number;
  tariff: Tariff;
}

export interface Tariff {
  id: number;
  name: string;
  code: string;
  description: string;
  chatgpt_daily_limit: number;
  dalle_2_daily_limit: number;
  sd_daily_limit: number;
  token_balance: number;
  price: number;
  is_trial: boolean;
}
