import TimeSlot from "../atoms/TimeSlot";
import {
  filterPastSlots,
  generateTimeSlots,
  getOpeningPeriodForDate,
  isReservationOverlapping,
  normalizeOpeningHours,
} from "../../utils/reservationTime";

const BayItem = ({
  bayId,
  bayNo,
  bayBookedTimeList,
  openingHours,
  selectedDate,
  onClick,
}) => {
  const openingPeriod = getOpeningPeriodForDate(
    normalizeOpeningHours(openingHours),
    selectedDate,
  );
  const availableSlots = new Set(
    filterPastSlots(generateTimeSlots(openingPeriod), selectedDate),
  );
  const startHour = Math.floor(openingPeriod.startMinutes / 60);
  const endHour = Math.ceil(openingPeriod.endMinutes / 60);
  const isBusinessClosed = availableSlots.size === 0;

  const timeIsUnavailable = (hour, isHalfHour) => {
    const minute = hour * 60 + (isHalfHour ? 30 : 0);
    const time = `${String(Math.floor(minute / 60)).padStart(2, "0")}:${String(
      minute % 60,
    ).padStart(2, "0")}`;

    return (
      !availableSlots.has(time) ||
      isReservationOverlapping(selectedDate, time, 30, bayBookedTimeList || [])
    );
  };

  const renderSlotsOrClosedMessage = () => {
    if (isBusinessClosed) {
      return (
        <div className="text-center text-gray-700">
          <div>
            오늘 영업이 종료되었습니다.
            <br />
            다음날 예약을 진행해 보세요.
          </div>
        </div>
      );
    } else {
      return (
        <TimeSlot
          startHour={startHour}
          endHour={endHour}
          isReservedCallback={timeIsUnavailable}
        />
      );
    }
  };

  return (
    <div
      className="p-4 overflow-x-auto border rounded-xl"
      onClick={() => onClick(bayId)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onClick(bayId);
      }}
      role="button"
      tabIndex={0}
    >
      <h2 className="font-semibold">베이 {bayNo}</h2>
      {renderSlotsOrClosedMessage()}
    </div>
  );
};

export default BayItem;
