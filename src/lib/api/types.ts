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

export type AiModelType = "text" | "image";
export interface AiModel {
  pk: string;
  type: AiModelType;
  name: string;
  code: string;
  icon: string;
  description: string | null;
  hint: string | null;
}

export interface ChatFolder {
  pk: string;
  name: string;
  sessions: ChatSessionFolder[];
}

export interface ChatSessionFolder {
  pk: string;
  name: string;
  created_at: string;
}

export interface ChatSession {
  pk: string;
  name: string;
  folder: string;
  ai_model: string;
  main_session: string;
  created_at: string;
}
