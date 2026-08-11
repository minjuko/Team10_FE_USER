import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import AuthLayout from "./AuthLayout";

vi.mock("../store/authSlice", () => ({
  getUserInfoThunk: () => ({ type: "auth/check" }),
}));

describe("보호 route 인증 확인", () => {
  it("인증 확인 중에는 protected children을 노출하지 않는다", async () => {
    let resolveAuth;
    const store = {
      getState: () => ({}),
      subscribe: () => () => {},
      dispatch: vi.fn(
        () =>
          new Promise((resolve) => {
            resolveAuth = () => resolve({ payload: {} });
          }),
      ),
    };

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/protected"]}>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="protected" element={<div>protected content</div>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.queryByText("protected content")).not.toBeInTheDocument();
    resolveAuth();
    await waitFor(() =>
      expect(screen.getByText("protected content")).toBeInTheDocument(),
    );
  });
});
