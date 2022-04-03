import { render, screen } from "@testing-library/react";
import { Login } from "./components/Login";
import { LoginPage } from "./components/LoginPage";

test("renders learn react link", () => {
  render(
    <Login
      onSubmit={jest.fn()}
      register={jest.fn()}
      errors={{ username: { message: "error message" } }}
      errorMessage="no"
    />
  );
  const linkElement = screen.getByText(/error message/i);
  expect(linkElement).toBeInTheDocument();
});
