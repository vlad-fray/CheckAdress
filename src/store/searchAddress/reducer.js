import { SET_STREETS, SELECT_STREET, SET_HOUSES, SET_HOUSE_FLATS, SELECT_HOUSE, SELECT_HOUSE_FLAT } from './action';

const initialState = {
  streets: [],
  houses: [],
  house_flats: [],
  selectedOptions: {
    city: 1,
    street: null,
    house: null,
    house_flat: null,
  },
};

export const searchAddressReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_STREETS: {
      const streets = payload;
      return {
        ...state,
        streets,
        houses: [],
        house_flats: [],
      };
    }
    case SET_HOUSES: {
      const houses = payload;
      return {
        ...state,
        houses,
        house_flats: [],
      };
    }
    case SET_HOUSE_FLATS: {
      const house_flats = payload;
      return {
        ...state,
        house_flats,
      };
    }
    case SELECT_STREET: {
      const street = payload;
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          street,
          house: null,
          house_flat: null,
        },
      };
    }
    case SELECT_HOUSE: {
      const house = payload;
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          house,
          house_flat: null,
        },
      };
    }
    case SELECT_HOUSE_FLAT: {
      const house_flat = payload;
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          house_flat,
        },
      };
    }
  }
  return state;
};
