import { Status } from './Status';

export class OrderDto {
  id: number;
  externalNumberTrade: string;
  externalNumberSa: string;
  status: Status;
  construction: string;
  responsiblePerson: string;
  dateCreation: Date;
  dateLimit: Date;
}
