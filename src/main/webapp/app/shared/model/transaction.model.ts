import { Moment } from 'moment';

export interface ITransaction {
  id?: number;
  name?: string;
  amount?: number;
  points?: number;
  date?: Moment;
  total?: number;
}

export const defaultValue: Readonly<ITransaction> = {};
