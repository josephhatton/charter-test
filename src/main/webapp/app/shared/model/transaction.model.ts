import { Moment } from 'moment';

export interface ITransaction {
  id?: number;
  name?: string;
  amount?: number;
  points?: number;
  date?: Moment;
}

export const defaultValue: Readonly<ITransaction> = {};
