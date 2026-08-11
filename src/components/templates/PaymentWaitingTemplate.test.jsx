import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import PaymentWaitingTemplate from "./PaymentWaitingTemplate";
import { CLEAR_PAYMENT } from "../../store/action";

const dispatch = vi.fn();
const approve = vi.fn();

vi.mock("react-redux", () => ({
  useDispatch: () => dispatch,
  useSelector: (selector) =>
    selector({
      reservationProcess: {
        selectedCarwashId: 1,
        selectedBayId: 2,
        reservations: {
          startTime: "2026-08-11T10:00",
          endTime: "2026-08-11T11:00",
        },
        tid: "stale-tid",
      },
    }),
}));

vi.mock("@tanstack/react-query", () => ({
  useMutation: () => ({ mutate: approve }),
}));

vi.mock("../../apis/payment", () => ({ pgapprove: vi.fn() }));

describe("결제 callback 검증", () => {
  beforeEach(() => {
    dispatch.mockClear();
    approve.mockClear();
  });

  it("pg_token 없이 직접 접근하면 approve하지 않고 stale tid를 제거한다", async () => {
    render(
      <MemoryRouter initialEntries={["/paymentwaiting"]}>
        <PaymentWaitingTemplate />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", {
        name: "결제 승인 정보를 확인할 수 없습니다.",
      }),
    ).toBeInTheDocument();
    expect(approve).not.toHaveBeenCalled();
    await waitFor(() =>
      expect(dispatch).toHaveBeenCalledWith({ type: CLEAR_PAYMENT }),
    );
  });
});
