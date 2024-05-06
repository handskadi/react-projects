import { it, expect, describe, vi } from 'vitest';
import {
  getDiscount,
  getPriceInCurrency,
  getShippingInfo,
  isOnline,
  login,
  renderPage,
  signUp,
  submitOrder,
} from '../src/mocking';
import { getExchangeRate } from '../src/libs/currency';
import { getShippingQuote } from '../src/libs/shipping';
import { trackPageView } from '../src/libs/analytics';
import { charge } from '../src/libs/payment';
import { sendEmail } from '../src/libs/email';
import security from '../src/libs/security';

vi.mock('../src/libs/currency');
vi.mock('../src/libs/shipping');
vi.mock('../src/libs/analytics');
vi.mock('../src/libs/payment');
vi.mock('../src/libs/email', async (importOriginal) => {
  const origicalModule = await importOriginal();
  return {
    ...origicalModule,
    sendEmail: vi.fn(),
  };
});

describe('Mocking: ', () => {
  describe('Mocking func Intro', () => {
    it('Mocking return value, resolve value and implementation + Matchers', () => {
      const greet = vi.fn();
      const greet2 = vi.fn();

      greet2();
      // Mocking a return value
      greet.mockReturnValue('MK Web');
      const returnValue = greet();

      console.log(returnValue);
      // mcoking to Reurn a Promise
      greet.mockResolvedValue('MK Web 2');
      greet().then((result) => {
        console.log(result);
      });

      // Mocking Logic
      greet.mockImplementation((name) => 'Hello ' + name);
      console.log(greet('KADI'));

      // Matchers
      expect(greet).toHaveBeenCalled();
      expect(greet).toHaveBeenCalledWith('KADI');
      expect(greet2).toHaveBeenCalledOnce();
    });
  });

  describe('sendText Exercice', () => {
    it('function should be called , with message, return ok', () => {
      const sendText = vi.fn();
      sendText.mockReturnValue('ok');

      const result = sendText('message');

      expect(sendText).toHaveBeenCalled();
      expect(sendText).toHaveBeenCalledWith('message');
      expect(result).toBe('ok');
    });
  });
});

describe('getPriceCurrency', () => {
  it('should return price in Tragt currency', () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);
    const result = getPriceInCurrency(10, 'AUD');

    expect(result).toBe(15);
  });
});

describe('getShippingInfo', () => {
  it('should should return shipping unavilable if quote cannot be fetched ', () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);
    const result = getShippingInfo('Tighir');

    expect(result).toMatch(/unavailable/i);
  });

  it('should return Shipping Info', () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 20, estimatedDays: 3 });

    const result = getShippingInfo('Tighir');

    expect(result).toMatch('$20');
    expect(result).toMatch(/3 Days/i);
    expect(result).toMatch(/Shipping Cost: \$20 \(3 Days\)/i);
  });
});

describe('rederPage', () => {
  it('should return correct content', async () => {
    const result = await renderPage();

    expect(result).toMatch(/content/i);
  });

  it('should call analytics', async () => {
    await renderPage();

    expect(trackPageView).toHaveBeenLastCalledWith('/home');
  });
});

describe('submitOrder', () => {
  const order = { totalAmount: 10 };
  const creditCard = { creditCardNumber: 1234 };
  it('should charge customer', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });
    await submitOrder(order, creditCard);

    expect(charge).toHaveBeenCalledWith(creditCard, order.totalAmount);
  });

  it('should return success when payment is successfull', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'success' });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: true });
  });

  it('should return failed when payment is not successfull', async () => {
    vi.mocked(charge).mockResolvedValue({ status: 'failed' });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: false, error: 'payment_error' });
  });
});

describe('signUP', () => {
  const email = 'name@domain.com';

  it('should return false if email is not valid', async () => {
    const result = await signUp('a');

    expect(result).toBe(false);
  });

  it('should return true if email is  valid', async () => {
    const result = await signUp(email);
    expect(result).toBe(true);
  });

  it('should send welcome email if email is valid', async () => {
    await signUp(email);

    expect(sendEmail).toHaveBeenCalledOnce();
    const args = vi.mocked(sendEmail).mock.calls[0];
    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});

describe('login', () => {
  const email = 'name@domain.com';
  it('should email the on-time login clode', async () => {
    const spy = vi.spyOn(security, 'generateCode');

    await login(email);
    const securityCode = spy.mock.results[0].value.toString();
    expect(sendEmail).toHaveBeenCalledWith(email, securityCode);
  });
});

describe('isOnline', () => {
  it('should return false if hour is out of range of open and close hourse', () => {
    vi.setSystemTime('2024-01-01 07:59');
    expect(isOnline()).toBe(false);

    vi.setSystemTime('2024-01-01 20:01');
    expect(isOnline()).toBe(false);
  });

  it('should return true if hour is within opening hourse', () => {
    vi.setSystemTime('2024-01-01 08:01');
    expect(isOnline()).toBe(true);

    vi.setSystemTime('2024-01-01 19:59');
    expect(isOnline()).toBe(true);
  });
});

describe('getDiscount', () => {
  it('should return 0.2 as discount is christams day', () => {
    vi.setSystemTime('2024-12-25 00:01');
    vi.setSystemTime('2024-12-25  23:59');

    expect(getDiscount()).toBe(0.2);
  });

  it('should return 0 as discount if not christams day', () => {
    vi.setSystemTime('2024-12-24  00:01');
    vi.setSystemTime('2024-12-26  00:01');

    expect(getDiscount()).toBe(0);
  });
});
