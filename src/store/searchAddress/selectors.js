export const getAllStreets = (state) => state.searchAdress.streets;
export const getAllHouses = (state) => state.searchAdress.houses;
export const getAllHouseFlats = (state) => state.searchAdress.house_flats;
export const getSelectedStreet = (state) => state.searchAdress.selectedOptions.street;
export const getSelectedHouse = (state) => state.searchAdress.selectedOptions.house;
export const getSelectedHouseFlat = (state) => state.searchAdress.selectedOptions.house_flat;
export const getSearchedResidentByNumber = (state) => state.searchAdress.searchedResidentByPhoneNumber;
