import { describe, expect, it } from "vitest";
import { reservationReducer } from "./reservationReducer";
import { saveReservation, setBayId, setCarwashId } from "./action";

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
    expect(reservationReducer(selectedState, setBayId(4))).toMatchObject({
      selectedBayId: 4,
      reservations: [],
    });
  });
});
