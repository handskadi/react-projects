import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MkCounter from "./MkCounter";
import { act } from "@testing-library/react";

test("Counter should have an initial value when set to 7", () => {
  render(<MkCounter initialValue={7} />);
  const count = screen.queryByText("7");
  expect(count).toBeVisible();
});

test("Counter should have an initial value of 0", () => {
  render(<MkCounter />);
  const count = screen.queryByText("0");
  expect(count).toBeVisible();
});

test("Click Add will increase value", () => {
  render(<MkCounter initialValue={1} />);
  const addButton = screen.getByText("Add");
  act(() => {
    userEvent.click(addButton);
  });
  const count = screen.queryByText("2");
  expect(count).toBeVisible();
});

test("Click Add Twice will increase value by 2", () => {
  render(<MkCounter initialValue={1} />);
  const addButton = screen.getByText("Add");
  act(() => {
    userEvent.click(addButton);
    userEvent.click(addButton); // Click twice
  });
  const count = screen.queryByText("3"); // Expect 3 after two clicks
  expect(count).toBeVisible();
});

test("Click Remove will decrease value", () => {
  render(<MkCounter initialValue={5} />); // Set initial value
  const removeButton = screen.getByText("Remove");
  act(() => {
    userEvent.click(removeButton);
  });
  const count = screen.queryByText("4"); // Expect 4 after one remove click
  expect(count).toBeVisible();
});

test("Number cannot be negative", () => {
  render(<MkCounter initialValue={0} />); // Set initial value to 0
  const removeButton = screen.getByText("Remove");
  userEvent.click(removeButton);
  const count = screen.queryByText("0"); // Expect no negative value
  expect(count).toBeVisible(); // Ensure count is not found, meaning it's not negative
});
