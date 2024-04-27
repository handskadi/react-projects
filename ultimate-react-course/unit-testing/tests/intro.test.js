import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
  // Normally we stracture our test using the triple AAA patren
  // AAA : Arrange, Act, Assetr
  it("Should return first argument if the first one is the greatest", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("Should return second argument if the second is the greatest", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("Should return first argument if the two are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("Sould return FizzBuzz if number is divided by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("Should return Fizz if number is divided by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("Should return Buzz if number is divided by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("Should return Number if it is not divided by 3 neither by 5", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});
