import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import LoginForm from "./LoginForm";

vi.mock("../../store/authSlice", () => ({
  loginThunk: vi.fn(),
}));

const store = {
  getState: () => ({}),
  subscribe: () => () => {},
  dispatch: vi.fn(),
};

describe("로그인 화면 진입 동선", () => {
  it("회원가입 링크를 항상 제공한다", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByRole("link", { name: "회원가입" })).toHaveAttribute(
      "href",
      "/signup",
    );
  });

  it("보호 페이지에서 이동한 경우 로그인 필요 안내를 표시한다", () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[
            {
              pathname: "/login",
              state: { authRequired: true, from: "/history" },
            },
          ]}
        >
          <Routes>
            <Route path="login" element={<LoginForm />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "로그인이 필요한 페이지입니다.",
    );
  });
});
