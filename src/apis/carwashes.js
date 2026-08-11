import { instance } from "./instance";

export const carwashesRecommended = (u_latitude, u_longitude) => {
  return instance.get(
    `/api/open/carwashes/recommended?latitude=${u_latitude}&longitude=${u_longitude}`,
  );
};

export const carwashesNearby = (u_latitude, u_longitude) => {
  return instance.get(
    `/api/open/carwashes/nearby?latitude=${u_latitude}&longitude=${u_longitude}`,
  );
};

export const carwashesSearch = (keywordIds, u_latitude, u_longitude) => {
  return instance.get(
    `/api/open/carwashes/search?keywordIdList=${keywordIds}&latitude=${u_latitude}&longitude=${u_longitude}`,
  );
};

export const carwashesInfo = (carwash_id) => {
  return instance.get(`/api/open/carwashes/${carwash_id}/info`);
};

export const carwashesReviews = (carwash_id) => {
  return instance.get(`/api/open/carwashes/${carwash_id}/reviews`);
};

export const calculatePayment = (bay_id, data) => {
  return instance.post(`/api/user/carwashes/${bay_id}/payment`, data);
};

export const postReviews = (data) => {
  return instance.post("/api/user/reviews", data);
};

export const carwashesBays = (carwash_id) => {
  return instance.get(`/api/open/carwashes/${carwash_id}/bays`);
};
