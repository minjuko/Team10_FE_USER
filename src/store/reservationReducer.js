import {
  CLEAR_PAYMENT,
  RESET_STORE,
  SAVE_RESERVATION,
  SAVE_TID,
  SET_BAY_ID,
  SET_CARWASH_ID,
  SET_RESERVATION_ID,
} from "./action";

export const initialReservationState = {
  selectedCarwashId: null,
  selectedBayId: null,
  selectedReservationId: null,
  reservations: [],
  tid: null,
};

export const reservationReducer = (state = initialReservationState, action) => {
  switch (action.type) {
    case SET_CARWASH_ID:
      return {
        ...state,
        selectedCarwashId: action.payload,
        selectedBayId: null,
        reservations: [],
        tid: null,
      };
    case SET_BAY_ID:
      return {
        ...state,
        selectedBayId: action.payload,
        reservations: [],
        tid: null,
      };
    case SET_RESERVATION_ID:
      return { ...state, selectedReservationId: action.payload };
    case SAVE_RESERVATION:
      return {
        ...state,
        reservations: {
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
        },
        tid: null,
      };
    case RESET_STORE:
      return initialReservationState;
    case SAVE_TID:
      return { ...state, tid: action.payload };
    case CLEAR_PAYMENT:
      return { ...state, tid: null };
    default:
      return state;
  }
};
