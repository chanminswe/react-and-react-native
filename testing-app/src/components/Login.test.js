import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Login from "./Login";

jest.mock("axios");

test("successful login displays success message", async () => {
  axios.post.mockResolvedValueOnce({ data: { message: "Login successful" } });

  render(<Login />);

  const emailInput = screen.getByPlaceholderText("Enter email");
  const passwordInput = screen.getByPlaceholderText("Enter password");
  const loginButton = screen.getByRole("button", { name: /login/i });

  await userEvent.type(emailInput, "test@example.com");
  await userEvent.type(passwordInput, "password123");
  await userEvent.click(loginButton);

  expect(await screen.findByText("Login successful")).toBeInTheDocument();
});
