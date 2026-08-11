import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import SignupForm from "./SignupForm";
import { signup } from "../../apis/user";

let mutationOptions;

vi.mock("@tanstack/react-query", () => ({
  useMutation: (options) => {
    mutationOptions = options;
    return { mutate: vi.fn(), isPending: false };
  },
}));

vi.mock("../../apis/user", () => ({
  signup: vi.fn(),
  checkEmail: vi.fn(),
}));

describe("회원가입 요청", () => {
  it("회원가입 API Promise가 완료될 때까지 mutation이 대기한다", () => {
    const pendingRequest = new Promise(() => {});
    signup.mockReturnValue(pendingRequest);
    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>,
    );

    const formData = { username: "user", email: "user@example.com" };
    expect(mutationOptions.mutationFn(formData)).toBeInstanceOf(Promise);
    expect(signup).toHaveBeenCalledWith(formData);
  });
});
