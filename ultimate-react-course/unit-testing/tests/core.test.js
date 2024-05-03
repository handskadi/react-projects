import { it, expect, describe } from "vitest";
import {
  calculateDiscount,
  canDrive,
  getCoupons,
  isPriceInRange,
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
  it("should return false when price is outside the range", () => {
    expect(isPriceInRange(-10, 0, 100)).toBe(false);
    expect(isPriceInRange(200, 0, 100)).toBe(false);
  });

  it("should return true when price is equal the min or max", () => {
    expect(isPriceInRange(0, 0, 100)).toBe(true);
    expect(isPriceInRange(100, 0, 100)).toBe(true);
  });

  it("should return true when price is within the range", () => {
    expect(isPriceInRange(50, 0, 100)).toBe(true);
  });
});

describe("isValidUsername", () => {
  const minLength = 5;
  const maxLength = 15;
  it("should return flase if username Length outside range", () => {
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
  it("should return invalid when countryCode is not valise code", () => {
    expect(canDrive(18, "FR")).toMatch(/invalid/i);
  });

  it("should return False when CC: US and age is under 16", () => {
    expect(canDrive(15, "US")).toBe(false);
  });

  it("should return True when CC: US and Age: =< 16", () => {
    expect(canDrive(16, "US")).toBe(true);
    expect(canDrive(36, "US")).toBe(true);
  });

  it("should return False when CC: US ang age is equal or over 100", () => {
    expect(canDrive(101, "US")).toBe(false);
  });

  it("should return False when CC: UK and age is under 17", () => {
    expect(canDrive(16, "UK")).toBe(false);
  });

  it("should return True when CC: UK and Age: =< 17", () => {
    expect(canDrive(17, "UK")).toBe(true);
    expect(canDrive(36, "UK")).toBe(true);
  });

  it("should return False when CC: UK ang age is equal or over 100", () => {
    expect(canDrive(101, "UK")).toBe(false);
  });
});
