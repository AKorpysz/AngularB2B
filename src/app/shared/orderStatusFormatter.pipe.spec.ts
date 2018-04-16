import {OrderStatusFormatterPipe} from './orderStatusFormatter.pipe';
import { OrderStatus } from '../dto/OrderStatus';

describe('Pipe: Default', () => {
  let pipe: OrderStatusFormatterPipe;

  beforeEach(() => {
    pipe = new OrderStatusFormatterPipe();
  });

  it('providing default valu on null', () => {
    expect(pipe.transform(null)).toBe('Brak danych');
  });

  it('providing accepted value', () => {
    expect(pipe.transform(OrderStatus.ACCEPTED)).toBe('Zaakceptowane');
  });

  it('providing error value', () => {
    expect(pipe.transform(OrderStatus.ERROR)).toBe('Błąd systemu');
  });

  it('providing rejected value', () => {
    expect(pipe.transform(OrderStatus.REJECTED)).toBe('Odrzucone');
  });

  it('providing realising value', () => {
    expect(pipe.transform(OrderStatus.WAITING)).toBe('W trakcie realizacji');
  });

});
