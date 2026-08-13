const pad = (value) => String(value).padStart(2, "0");

export const toLocalDate = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

const addDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return toLocalDate(date);
};

export const DEMO_CREDENTIALS = {
  email: "test@example.com",
  password: "test1234!",
};

export const demoCarwashes = [
  {
    id: 101,
    name: "모닝 버블 세차장",
    image: { url: "/carouselimage1.jpg" },
    rate: 4.8,
    reviewCount: 12,
    reviewCnt: 12,
    distance: 850,
    price: 6000,
    bayCnt: 2,
    optime: {
      weekday: { start: "09:30", end: "18:30" },
      weekend: { start: "09:30", end: "18:30" },
    },
    location: {
      address: "광주광역시 북구 데모로 10",
      latitude: 35.176,
      longitude: 126.91,
    },
    locationDTO: {
      address: "광주광역시 북구 데모로 10",
      latitude: 35.176,
      longitude: 126.91,
    },
    keywordIdList: [8, 10, 11],
    description:
      "09:30 시작 경계와 이미 예약된 슬롯을 확인할 수 있는 데모 세차장입니다.",
    tel: "062-000-0101",
    imageFileList: [{ url: "/carouselimage1.jpg" }],
  },
  {
    id: 102,
    name: "애프터눈 워시",
    image: null,
    rate: 4.5,
    reviewCount: 8,
    reviewCnt: 8,
    distance: 2100,
    price: 7000,
    bayCnt: 1,
    optime: {
      weekday: { start: "14:00", end: "18:00" },
      weekend: { start: "14:00", end: "18:00" },
    },
    location: {
      address: "광주광역시 동구 오후로 14",
      latitude: 35.151,
      longitude: 126.924,
    },
    locationDTO: {
      address: "광주광역시 동구 오후로 14",
      latitude: 35.151,
      longitude: 126.924,
    },
    keywordIdList: [9, 12],
    description: "14:00부터 운영하는 오후 영업 데모 세차장입니다.",
    tel: "062-000-0102",
    imageFileList: [],
  },
  {
    id: 103,
    name: "올데이 셀프워시",
    image: null,
    rate: 4.3,
    reviewCount: 5,
    reviewCnt: 5,
    distance: 3300,
    price: 8000,
    bayCnt: 1,
    optime: {
      weekday: { start: "00:00", end: "00:00" },
      weekend: { start: "00:00", end: "00:00" },
    },
    location: {
      address: "광주광역시 서구 올데이로 24",
      latitude: 35.153,
      longitude: 126.889,
    },
    locationDTO: {
      address: "광주광역시 서구 올데이로 24",
      latitude: 35.153,
      longitude: 126.889,
    },
    keywordIdList: [10, 13],
    description:
      "00:00~00:00을 다음 날 자정까지로 해석하는 24시간 데모 세차장입니다.",
    tel: "062-000-0103",
    imageFileList: [],
  },
];

export const createDemoState = () => ({
  nextReservationId: 900,
  pendingPayment: null,
  reservations: [
    {
      id: 501,
      time: { start: `${addDays(1)}T16:00`, end: `${addDays(1)}T16:30` },
      carwashId: 101,
      carwashName: "모닝 버블 세차장",
      bayNum: 1,
      price: 6000,
      image: { url: "/carouselimage1.jpg" },
      status: "upcoming",
    },
    {
      id: 401,
      time: { start: `${addDays(-2)}T14:00`, end: `${addDays(-2)}T15:00` },
      carwashId: 102,
      carwashName: "애프터눈 워시",
      bayNum: 1,
      price: 14000,
      image: null,
      status: "complete",
    },
  ],
  reviews: [
    {
      carwashId: 101,
      rate: 5,
      username: "데모 사용자",
      created_at: `${addDays(-3)}T12:00`,
      comment: "예약 시간이 정확하고 이용이 편리했어요.",
      keywordIdList: [1, 4],
    },
  ],
});

export const demoBookedTimes = (carwashId, bayId) => {
  if (Number(carwashId) !== 101 || Number(bayId) !== 1011) return [];
  return [
    { startTime: `${addDays(1)}T10:00`, endTime: `${addDays(1)}T11:00` },
    { startTime: `${addDays(1)}T16:00`, endTime: `${addDays(1)}T16:30` },
  ];
};
