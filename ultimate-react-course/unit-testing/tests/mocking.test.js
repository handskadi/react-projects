import { it, expect, describe, vi } from "vitest";

describe("Mocking test Suite", () => {
  it("Mocking return value, resolve value and implementation + Matchers", () => {
    const greet = vi.fn();
    const greet2 = vi.fn();

    greet2();
    // Mocking a return value
    greet.mockReturnValue("MK Web");
    const returnValue = greet();

    console.log(returnValue);
    // mcoking to Reurn a Promise
    greet.mockResolvedValue("MK Web 2");
    greet().then((result) => {
      console.log(result);
    });

    // Mocking Logic
    greet.mockImplementation((name) => "Hello " + name);
    console.log(greet("KADI"));

    // Matchers
    expect(greet).toHaveBeenCalled();
    expect(greet).toHaveBeenCalledWith("KADI");
    expect(greet2).toHaveBeenCalledOnce();
  });
});
