import { SET_STREETS, SELECT_OPTIONS, SET_HOUSES } from './action';

const initialState = {
  streets: [],
  houses: [],
  house_flats: [],
  selectedOptions: {
    cityId: null,
    streetId: null,
    houseId: null,
    house_flatsId: null,
  },
};

export const checkAddressReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_OPTIONS: {
      const { streetId, houseId, house_flatsId } = payload;
      return {
        ...state,
        selectedOptions: {
          cityId: 1,
          streetId,
          houseId,
          house_flatsId,
        },
      };
    }
    case SET_STREETS: {
      const streets = payload;
      return {
        ...state,
        streets,
      };
    }
    case SET_HOUSES: {
      const houses = payload;
      return {
        ...state,
        houses,
      };
    }
  }
  return state;
};
