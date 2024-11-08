// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'Goastra PRO MINI',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Faster responses for simple tasks',
  },
  {
    id: 'gpt-4o',
    label: 'Goastra PRO 4O-Unlimited',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
