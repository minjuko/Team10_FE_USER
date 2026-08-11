import React from "react";
import dayjs from "dayjs";
import TimeSlot from "../atoms/TimeSlot";

const BayItem = ({
  bayId,
  bayNo,
  bayBookedTimeList,
  openingHours,
  selectedDate,
  onClick,
}) => {
  const timeIsReserved = (
    hour,
    isHalfHour,
    bayBookedTimeList,
    selectedDate,
  ) => {
    const minutesToAdd = isHalfHour ? 30 : 0;

    const startTimeToCheck = dayjs(selectedDate)
      .hour(hour)
      .minute(minutesToAdd);

    return bayBookedTimeList.some((timeSlot) => {
      const startTime = dayjs(timeSlot.startTime);
      const endTime = dayjs(timeSlot.endTime);

      return (
        startTimeToCheck.isSame(startTime) ||
        (startTimeToCheck.isBefore(endTime) &&
          startTimeToCheck.isAfter(startTime))
      );
    });
  };

  const isWeekend =
    dayjs(selectedDate).day() === 0 || dayjs(selectedDate).day() === 6;
  const openingHoursForToday = isWeekend
    ? openingHours.weekend
    : openingHours.weekday;

  const now = dayjs();
  const closingTimeToday =
    openingHoursForToday.end != "00:00"
      ? dayjs()
          .set("hour", parseInt(openingHoursForToday.end.split(":")[0]))
          .set("minute", parseInt(openingHoursForToday.end.split(":")[1]))
      : dayjs().set("hour", parseInt("23")).set("minute", parseInt("59"));

  const isBusinessClosed = now.isAfter(closingTimeToday);

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
          startHour={now.hour()}
          endHour={
            closingTimeToday.minute() == 0
              ? closingTimeToday.hour()
              : closingTimeToday.hour() + 1
          }
          isReservedCallback={(hour, isHalfHour) =>
            timeIsReserved(hour, isHalfHour, bayBookedTimeList, selectedDate)
          }
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
