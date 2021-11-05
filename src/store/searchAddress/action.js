import { API } from './../../config';

export const SET_STREETS = 'SET_STREETS';
export const SET_HOUSES = 'SET_HOUSES';
export const SET_HOUSE_FLATS = 'SET_HOUSE_FLATS';
export const SELECT_OPTIONS = 'SELECT_OPTIONS';
export const SELECT_STREET = 'SELECT_STREET';
export const SELECT_HOUSE = 'SELECT_HOUSE';
export const SELECT_HOUSE_FLAT = 'SELECT_HOUSE_FLAT';

const setStreetsAC = (streets) => ({
  type: SET_STREETS,
  payload: streets,
});

const setHousesAC = (houses) => ({
  type: SET_HOUSES,
  payload: houses,
});

const setHouseFlatAC = (house_flats) => ({
  type: SET_HOUSE_FLATS,
  payload: house_flats,
});

export const selectStreetAC = (street) => ({
  type: SELECT_STREET,
  payload: street,
});

export const selectHouseAC = (house) => ({
  type: SELECT_HOUSE,
  payload: house,
});

export const selectHouseFlatAC = (house_flat) => ({
  type: SELECT_HOUSE_FLAT,
  payload: house_flat,
});

export const setStreetsThunk = () => async (dispatch) => {
  try {
    const streetsRes = await fetch(`${API}/Request/streets`);

    if (!streetsRes.ok) {
      throw new Error('Request for streets failed');
    }

    const streetsData = await streetsRes.json();
    const streets = streetsData.map((street) => ({ id: street.id, name: street.name }));

    dispatch(setStreetsAC(streets));
  } catch (err) {
    console.log(err);
  }
};

export const setHouseThunk = (streetId) => async (dispatch) => {
  try {
    const housesRes = await fetch(`${API}/Request/houses/${streetId}`);

    if (!housesRes.ok) {
      throw new Error('Request for houses failed');
    }

    const housesData = await housesRes.json();
    const houses = housesData.map((house) => ({ id: house.id, name: house.name }));

    dispatch(setHousesAC(houses));
  } catch (err) {
    console.log(err);
  }
};

export const setHouseFlatThunk = (housesId) => async (dispatch) => {
  try {
    const house_flatsRes = await fetch(`${API}/Request/house_flats/${housesId}`);

    if (!house_flatsRes.ok) {
      throw new Error('Request for houses failed');
    }

    const house_flatsData = await house_flatsRes.json();
    const house_flats = house_flatsData
      .filter((house_flat) => house_flat.typeId === 3)
      .map((house_flat) => ({ id: house_flat.id, name: house_flat.name }));

    if (!house_flats.length) house_flats.push(house_flatsData.find((house_flat) => house_flat.typeId === 1));

    dispatch(setHouseFlatAC(house_flats));
  } catch (err) {
    console.log(err.message);
  }
};

export const searchResidentsThunk =
  ({ streetId, houseId, houseFlatId }) =>
  async (dispatch) => {
    try {
      // const clientsRes = await fetch(`${API}/HousingStock?streetId=${streetId}&houseId=${houseId}`);
      const clientsRes = await fetch(`${API}/HousingStock/clients?addressId=${houseFlatId}`);
      console.log(houseFlatId);

      if (!clientsRes.ok) {
        throw new Error('Request for clients failed');
      }

      const clientsData = await clientsRes.json();
      // const house_flats = house_flatsData.filter((house_flat) => house_flat.typeId === 3).map((house_flat) => ({ id: house_flat.id, name: house_flat.name }));
      console.log(clientsData);

      // dispatch(setHouseFlatAC(house_flats));
    } catch (err) {
      console.log(err.message);
    }
  };
