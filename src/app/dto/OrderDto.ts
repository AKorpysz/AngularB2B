import { OrderStatus } from './OrderStatus';

export class OrderDto {
  id: number;
  externalNumberTrade: string;
  externalNumberSa: string;
  status: OrderStatus;
  construction: string;
  responsiblePerson: string;
  dateCreation: Date;
  dateLimit: Date;
}
