import {
  it,
  expect,
  describe,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";

import {
  Stack,
  calculateDiscount,
  canDrive,
  createProduct,
  fetchData,
  fetchDataReject,
  getCoupons,
  isPriceInRange,
  isStrongPassword,
  isValidUsername,
  validateUserInput,
} from "../src/core";

describe("test suite", () => {
  it("test case", () => {
    const result = "The requested file was not found.";

    expect(result).toBeDefined();
    expect(result).toBe("The requested file was not found.");
    expect(result).toMatch(/Not found/i); // i for case insensitive
    expect(result);
  });
});

describe("getCoupons", () => {
  it("should return an array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array with a valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupons) => {
      expect(coupons).toHaveProperty("code");
      expect(typeof coupons.code).toBe("string");
      expect(coupons.code).toBeTruthy();
    });
  });

  it("should return an array with valid discount", () => {
    const coupons = getCoupons();
    coupons.forEach((coupons) => {
      expect(coupons).toHaveProperty("discount");
      expect(typeof coupons.discount).toBe("number");
      expect(coupons.discount).toBeGreaterThan(0);
      expect(coupons.discount).toBeLessThan(1);
    });
  });
});

describe("CalculateDiscount", () => {
  it("should returns discount price if given valid code", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });

  it("should handle non-numeric price", () => {
    expect(calculateDiscount("10", "save10")).toMatch(/invalid/i);
  });

  it("should handle negative price", () => {
    expect(calculateDiscount(-10, "save10")).toMatch(/invalid/i);
  });

  it("should handle non-string discount code", () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });

  it("should handle non-string discount code", () => {
    expect(calculateDiscount(10, "INVALID")).toBe(10);
  });
});

describe("validateUserInput", () => {
  it("should return Validation successful on valid inpuut", () => {
    expect(validateUserInput("kadi", 36)).toMatch(/successful/i);
  });

  it("should handle non-string usernames", () => {
    expect(validateUserInput(true, 36)).toMatch(/invalid/i);
  });

  it("should handle usernames less than 3 characters", () => {
    expect(validateUserInput("mo", 36)).toMatch(/invalid/i);
  });

  it("should handle usernames longer than 255 characters", () => {
    expect(validateUserInput("A".repeat(256), 36)).toMatch(/invalid/i);
  });

  it("should handle non-numeric age", () => {
    expect(validateUserInput("kadi", "36")).toMatch(/invalid/i);
  });

  it("should handle age less than 18 years", () => {
    expect(validateUserInput("kadi", 15)).toMatch(/invalid/i);
  });

  it("should handle age larger than 100 years", () => {
    expect(validateUserInput("kadi", 101)).toMatch(/invalid/i);
  });

  it("should handle both invalid username & age", () => {
    expect(validateUserInput("", 0)).toMatch(/invalid username/i);
    expect(validateUserInput("", 0)).toMatch(/invalid age/i);
  });
});

describe("isPriceInRange", () => {
  // it("should return false when price is outside the range", () => {
  //   expect(isPriceInRange(-10, 0, 100)).toBe(false);
  //   expect(isPriceInRange(200, 0, 100)).toBe(false);
  // });

  // it("should return true when price is equal the min or max", () => {
  //   expect(isPriceInRange(0, 0, 100)).toBe(true);
  //   expect(isPriceInRange(100, 0, 100)).toBe(true);
  // });

  // it("should return true when price is within the range", () => {
  //   expect(isPriceInRange(50, 0, 100)).toBe(true);
  // });

  it.each([
    { price: -10, result: false, scenario: "outside the range" },
    { price: 0, result: true, scenario: "equal the min" },
    { price: 50, result: true, scenario: "within the range" },
    { price: 100, result: true, scenario: "equal the max" },
    { price: 200, result: false, scenario: "outside the range" },
  ])(
    "shoud return $result when price is $scenario | e.g: $price",
    ({ price, result }) => {
      expect(isPriceInRange(price, 0, 100)).toBe(result);
    }
  );
});

describe("isValidUsername", () => {
  const minLength = 5;
  const maxLength = 15;
  it("should return flase if username Length outside range.", () => {
    expect(isValidUsername("A".repeat(minLength - 1))).toBe(false);
    expect(isValidUsername("A".repeat(maxLength + 1))).toBe(false);
  });

  it("should return true if username is qual to min or max length", () => {
    expect(isValidUsername("a".repeat(minLength))).toBe(true);
    expect(isValidUsername("A".repeat(maxLength))).toBe(true);
  });

  it("should return true if username is within the range", () => {
    expect(isValidUsername("a".repeat(minLength + 1))).toBe(true);
    expect(isValidUsername("A".repeat(maxLength - 1))).toBe(true);
  });

  it("should return false for ivalid input", () => {
    expect(isValidUsername(null)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
    expect(isValidUsername(10)).toBe(false);
  });
});

describe("canDrive", () => {
  it("should return invalid when countryCode is not valid code", () => {
    expect(canDrive(18, "FR")).toMatch(/invalid/i);
  });

  // it("should return False when CC: US and age is under 16", () => {
  //   expect(canDrive(15, "US")).toBe(false);
  // });

  // it("should return True when CC: US and Age: =< 16", () => {
  //   expect(canDrive(16, "US")).toBe(true);
  //   expect(canDrive(36, "US")).toBe(true);
  // });

  // it("should return False when CC: US ang age is equal or over 100", () => {
  //   expect(canDrive(101, "US")).toBe(false);
  // });

  // it("should return False when CC: UK and age is under 17", () => {
  //   expect(canDrive(16, "UK")).toBe(false);
  // });

  // it("should return True when CC: UK and Age: =< 17", () => {
  //   expect(canDrive(17, "UK")).toBe(true);
  //   expect(canDrive(36, "UK")).toBe(true);
  // });

  // it("should return False when CC: UK ang age is equal or over 100", () => {
  //   expect(canDrive(101, "UK")).toBe(false);
  // });

  it.each([
    { age: 15, country: "US", result: false },
    { age: 16, country: "US", result: true },
    { age: 36, country: "US", result: true },
    { age: 101, country: "US", result: false },

    { age: 16, country: "UK", result: false },
    { age: 17, country: "UK", result: true },
    { age: 36, country: "UK", result: true },
    { age: 101, country: "UK", result: false },
  ])(
    "should return $result when country is $country and age is $age",
    ({ age, country, result }) => {
      expect(canDrive(age, country)).toBe(result);
    }
  );
});

describe("FerchData", () => {
  it("should return a promse that will resolve to an array of numbers", async () => {
    const result = await fetchData();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("should return failed on rejection", async () => {
    try {
      const result = await fetchDataReject();
    } catch (error) {
      expect(error).toHaveProperty("reason");
      expect(error.reason).toMatch(/failed/i);
    }
  });
});

describe("Test Suite TearDown", () => {
  beforeAll(() => {
    console.log("Befor all!");
  });
  beforeEach(() => {
    console.log("Before each!");
  });
  afterEach(() => {
    console.log("After each!");
  });

  afterAll(() => {
    console.log("After All!");
  });
  it("Test case 1", () => {});
  it("Test case 2", () => {});
});

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("push should add item to stack", () => {
    stack.push(1);

    expect(stack.size()).toBe(1);
  });

  it("pop should remove and return top item from stack", () => {
    stack.push(1);
    stack.push(2);

    const popedItem = stack.pop();
    expect(popedItem).toBe(2);
    expect(stack.size()).toBe(1);
  });

  it("pop should throw an error is stack is empty", () => {
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  it("peek should return to the item of the stack", () => {
    stack.push(1);
    stack.push(2);

    const peekItem = stack.peek();

    expect(peekItem).toBe(2);
    expect(stack.size()).toBe(2);
  });

  it("peek should retun an error if stack is empty", () => {
    expect(() => stack.peek()).toThrowError(/empty/i);
  });

  it("isEmpty should return True if stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("isEmpty should return False if stack is not empty", () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("size should return number of items on stck", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(3);
  });

  it("clear should remove all items from stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.clear();

    expect(stack.size()).toBe(0);
  });
});

describe("createProduct", () => {
  it("should return False on sucss when name is not provided", () => {
    const product = { price: 14 };

    const createdProduct = createProduct(product);

    expect(createdProduct.success).toBe(false);
  });

  it("should return Error code: invalid and message: missing when name is not provided", () => {
    const product = { price: 14 };

    const createdProduct = createProduct(product);

    expect(createdProduct.error.code).toMatch(/invalid/i);
    expect(createdProduct.error.message).toMatch(/missing/i);
  });

  it("should return False when price is less or equal zero", () => {
    const product1 = { name: "Mk Product 1", price: 0 };
    const product2 = { name: "Mk Product 2", price: -1 };

    const createdProduct1 = createProduct(product1);
    const createdProduct2 = createProduct(product2);

    expect(createdProduct1.success).toBe(false);
    expect(createdProduct2.success).toBe(false);
  });

  it("should return Error code: invalid and message: missing when price is <= zero", () => {
    const product1 = { name: "Mk Product 1", price: 0 };
    const product2 = { name: "Mk Product 2", price: -1 };

    const createdProduct1 = createProduct(product1);
    const createdProduct2 = createProduct(product2);

    expect(createdProduct1.error.code).toMatch(/invalid/i);
    expect(createdProduct1.error.message).toMatch(/missing/i);
    expect(createdProduct2.error.code).toMatch(/invalid/i);
    expect(createdProduct2.error.message).toMatch(/missing/i);
  });

  it("should sould return true when product was succesfull added", () => {
    const product = { name: "Mk Product", price: 50 };

    const createdProduct = createProduct(product);

    expect(createdProduct.success).toBe(true);
  });

  it("should sould return message with successfully when product is added", () => {
    const product = { name: "Mk Product", price: 50 };

    const createdProduct = createProduct(product);

    expect(createdProduct.message).toMatch(/success/i);
  });
});

describe("isStrogPassword", () => {
  it("should return false wehn password is less that 8 characters", () => {
    const password = "Kadimo7";

    expect(isStrongPassword(password)).toBe(false);
  });

  it("should return false wehn password doesn't contain at least 1 uppercase", () => {
    const password = "kadimoha123";

    expect(isStrongPassword(password)).toBe(false);
  });

  it("should return false wehn password doesn't contain at least 1 lowercase", () => {
    const password = "KADIMOHA123";

    expect(isStrongPassword(password)).toBe(false);
  });

  it("should return false wehn password doesn't contain at least 1 digit", () => {
    const password = "KadiMohamed";

    expect(isStrongPassword(password)).toBe(false);
  });

  it("should return true  when password criteria are met", () => {
    const password = "Kadimoha123";

    expect(isStrongPassword(password)).toBe(true);
  });
});
