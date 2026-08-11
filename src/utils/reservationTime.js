const SLOT_INTERVAL_MINUTES = 30;
export const RESERVATION_DURATIONS = [30, 60, 90, 120, 150, 180, 240];

const DATE_TIME_PATTERN =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?$/;

export const timeToMinutes = (time) => {
  const match = /^(\d{2}):(\d{2})(?::\d{2})?$/.exec(time || "");
  if (!match) throw new Error(`Invalid time: ${time}`);

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (minutes > 59 || hours > 24 || (hours === 24 && minutes !== 0)) {
    throw new Error(`Invalid time: ${time}`);
  }
  return hours * 60 + minutes;
};

export const minutesToTime = (minutes) => {
  if (!Number.isInteger(minutes) || minutes < 0 || minutes > 1440) {
    throw new Error(`Invalid minutes: ${minutes}`);
  }
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(remainder).padStart(
    2,
    "0",
  )}`;
};

const formatLocalDate = (date) =>
  [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((value, index) => String(value).padStart(index === 0 ? 4 : 2, "0"))
    .join("-");

export const parseLocalDateTime = (value) => {
  const match = DATE_TIME_PATTERN.exec(value || "");
  if (!match) throw new Error(`Invalid local datetime: ${value}`);
  return new Date(
    Number(match[1]),
    Number(match[2]) - 1,
    Number(match[3]),
    Number(match[4]),
    Number(match[5]),
    Number(match[6] || 0),
  );
};

const formatLocalDateTime = (date) => {
  const time = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes(),
  ).padStart(2, "0")}`;
  return `${formatLocalDate(date)}T${time}`;
};

export const combineLocalDateAndTime = (date, time) => {
  const totalMinutes = timeToMinutes(time);
  const result = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    totalMinutes,
  );
  return result;
};

export const normalizeOpeningPeriod = ({ start, end }) => {
  const startMinutes = timeToMinutes(start);
  const rawEndMinutes = timeToMinutes(end);
  const closesAtMidnight = rawEndMinutes === 0;

  return {
    start: minutesToTime(startMinutes),
    end: minutesToTime(closesAtMidnight ? 1440 : rawEndMinutes),
    startMinutes,
    endMinutes: closesAtMidnight ? 1440 : rawEndMinutes,
    is24Hours: startMinutes === 0 && rawEndMinutes === 0,
  };
};

export const normalizeOpeningHours = (openingHours) =>
  Object.fromEntries(
    Object.entries(openingHours || {}).map(([dayType, period]) => [
      dayType,
      normalizeOpeningPeriod(period),
    ]),
  );

export const getOpeningPeriodForDate = (openingHours, date) =>
  date.getDay() === 0 || date.getDay() === 6
    ? openingHours.weekend
    : openingHours.weekday;

export const generateTimeSlots = (
  openingPeriod,
  interval = SLOT_INTERVAL_MINUTES,
) => {
  const period =
    "startMinutes" in openingPeriod
      ? openingPeriod
      : normalizeOpeningPeriod(openingPeriod);
  const slots = [];
  for (
    let minute = period.startMinutes;
    minute < period.endMinutes;
    minute += interval
  ) {
    slots.push(minutesToTime(minute));
  }
  return slots;
};

const isSameLocalDate = (left, right) =>
  left.getFullYear() === right.getFullYear() &&
  left.getMonth() === right.getMonth() &&
  left.getDate() === right.getDate();

export const isPastSlot = (date, time, now = new Date()) =>
  isSameLocalDate(date, now) && combineLocalDateAndTime(date, time) <= now;

export const filterPastSlots = (slots, date, now = new Date()) =>
  slots.filter((time) => !isPastSlot(date, time, now));

export const addMinutesToLocalDateTime = (date, time, duration) => {
  const start = combineLocalDateAndTime(date, time);
  return new Date(start.getTime() + duration * 60 * 1000);
};

const asLocalDateTime = (value) =>
  value instanceof Date ? value : parseLocalDateTime(value);

export const doReservationPeriodsOverlap = (
  firstStart,
  firstEnd,
  secondStart,
  secondEnd,
) => {
  const aStart = asLocalDateTime(firstStart);
  const aEnd = asLocalDateTime(firstEnd);
  const bStart = asLocalDateTime(secondStart);
  const bEnd = asLocalDateTime(secondEnd);
  return aStart < bEnd && aEnd > bStart;
};

export const isReservationOverlapping = (
  selectedDate,
  startTime,
  duration,
  bookedTimeList = [],
) => {
  const start = combineLocalDateAndTime(selectedDate, startTime);
  const end = addMinutesToLocalDateTime(selectedDate, startTime, duration);
  return bookedTimeList.some((booking) =>
    doReservationPeriodsOverlap(start, end, booking.startTime, booking.endTime),
  );
};

export const getAvailableDurations = ({
  selectedDate,
  startTime,
  openingPeriod,
  bookedTimeList = [],
  durations = RESERVATION_DURATIONS,
}) => {
  if (!startTime) return [];
  const period =
    "startMinutes" in openingPeriod
      ? openingPeriod
      : normalizeOpeningPeriod(openingPeriod);
  const startMinutes = timeToMinutes(startTime);

  return durations.filter(
    (duration) =>
      startMinutes >= period.startMinutes &&
      startMinutes + duration <= period.endMinutes &&
      !isReservationOverlapping(
        selectedDate,
        startTime,
        duration,
        bookedTimeList,
      ),
  );
};

export const createReservationDateTimes = (date, startTime, duration) => {
  const start = combineLocalDateAndTime(date, startTime);
  const end = addMinutesToLocalDateTime(date, startTime, duration);
  return {
    startTime: formatLocalDateTime(start),
    endTime: formatLocalDateTime(end),
  };
};

export const buildReservationPayload = (bayId, date, startTime, duration) => ({
  bayId: Number(bayId),
  ...createReservationDateTimes(date, startTime, duration),
});
