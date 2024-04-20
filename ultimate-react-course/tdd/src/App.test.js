import { render, screen } from "@testing-library/react";
import App from "./App";

test("It should have correct title", () => {
  render(<App />);
  const counterTitle = screen.getByText("Mk Counter");
  expect(counterTitle).toBeInTheDocument();
});
