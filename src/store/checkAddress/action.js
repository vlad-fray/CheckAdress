export const SET_STREETS = 'SET_STREETS';
export const SET_HOUSES = 'SET_HOUSES';
export const SELECT_OPTIONS = 'SELECT_OPTIONS';

const API = 'https://dispex.org/api/vtest';

const setStreetsAC = (streets) => ({
  type: SET_STREETS,
  payload: streets,
});

const setHousesAC = (houses) => ({
  type: SET_HOUSES,
  payload: houses,
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
