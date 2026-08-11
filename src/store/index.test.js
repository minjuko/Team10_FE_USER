import { describe, expect, it } from "vitest";
import { reservationReducer } from "./reservationReducer";
import {
  clearPayment,
  resetStore,
  saveReservation,
  saveTid,
  setBayId,
  setCarwashId,
} from "./action";

const selectedState = reservationReducer(
  reservationReducer(undefined, setCarwashId(1)),
  saveReservation("2026-08-11T10:00", "2026-08-11T11:00"),
);

describe("예약 과정 상태 reset", () => {
  it("세차장 변경 시 이전 Bay와 예약 시간을 reset한다", () => {
    const stateWithBay = { ...selectedState, selectedBayId: 2 };
    expect(reservationReducer(stateWithBay, setCarwashId(3))).toMatchObject({
      selectedCarwashId: 3,
      selectedBayId: null,
      reservations: [],
    });
  });

  it("Bay 변경 시 이전 Bay의 예약 시간을 reset한다", () => {
    const stateWithPayment = reservationReducer(
      selectedState,
      saveTid("old-tid"),
    );
    expect(reservationReducer(stateWithPayment, setBayId(4))).toMatchObject({
      selectedBayId: 4,
      reservations: [],
      tid: null,
    });
  });

  it("세차장 변경 시 이전 결제 tid도 reset한다", () => {
    const stateWithPayment = reservationReducer(
      selectedState,
      saveTid("old-tid"),
    );
    expect(
      reservationReducer(stateWithPayment, setCarwashId(3)).tid,
    ).toBeNull();
  });

  it("새 예약 시간을 저장할 때 stale tid를 제거한다", () => {
    const stateWithPayment = reservationReducer(
      selectedState,
      saveTid("old-tid"),
    );
    const next = reservationReducer(
      stateWithPayment,
      saveReservation("2026-08-12T10:00", "2026-08-12T11:00"),
    );
    expect(next.tid).toBeNull();
    expect(next.reservations.startTime).toBe("2026-08-12T10:00");
  });

  it("결제 실패 시 tid만 제거하고 재시도할 예약 정보는 유지한다", () => {
    const stateWithPayment = reservationReducer(selectedState, saveTid("tid"));
    expect(reservationReducer(stateWithPayment, clearPayment())).toMatchObject({
      reservations: selectedState.reservations,
      tid: null,
    });
  });

  it("예약 완료 시 전체 예약 process를 reset한다", () => {
    const stateWithPayment = reservationReducer(selectedState, saveTid("tid"));
    expect(reservationReducer(stateWithPayment, resetStore())).toEqual(
      reservationReducer(undefined, { type: "@@init" }),
    );
  });
});
