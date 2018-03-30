import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from '../dto/OrderStatus';

@Pipe({name: 'orderStatusFormatter'})
export class OrderStatusFormatterPipe implements PipeTransform {
  transform(value: OrderStatus): string {
    const noData = 'Brak danych';
    if (!value) {
      return noData;
    }
    switch (value) {
      case OrderStatus.ACCEPTED:
        return 'Zaakceptowane';
      case OrderStatus.ERROR:
        return 'Błąd systemu';
      case OrderStatus.REJECTED:
        return 'Odrzucone';
      case OrderStatus.WAITING:
        return 'W trakcie realizacji';
      default:
        return noData;
    }
  }
}
