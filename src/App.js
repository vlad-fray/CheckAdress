import { Button, FormControl, InputLabel } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchFilter from './components/SearchFilter';
import { setStreetsThunk, setHouseThunk, setHouseFlatThunk, selectStreetAC, selectHouseAC, selectHouseFlatAC, searchResidentsThunk } from './store/searchAddress/action';
import { getAllHouses, getAllStreets, getAllHouseFlats, getSelectedStreet, getSelectedHouse, getSelectedHouseFlat } from './store/searchAddress/selectors';

const App = () => {
  const streets = useSelector(getAllStreets);
  const houses = useSelector(getAllHouses);
  const house_flats = useSelector(getAllHouseFlats);
  const selectedStreet = useSelector(getSelectedStreet);
  const selectedHouse = useSelector(getSelectedHouse);
  const selectedHouseFlat = useSelector(getSelectedHouseFlat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStreetsThunk());
  }, [dispatch]);

  const chooseStreetHandler = (street) => {
    dispatch(selectStreetAC(street));
    if (street) dispatch(setHouseThunk(street.id));
  };

  const chooseHouseHandler = (house) => {
    dispatch(selectHouseAC(house));
    if (house) dispatch(setHouseFlatThunk(house.id));
  };

  const chooseHouseFlatHandler = (house_flat) => {
    dispatch(selectHouseFlatAC(house_flat));
  };

  const searchResidentsHandler = () => {
    dispatch(
      searchResidentsThunk({
        streetId: selectedStreet?.id || null,
        houseId: selectedHouse?.id || null,
        houseFlatId: selectedHouseFlat?.id || null,
      })
    );
  };

  return (
    <div className='App'>
      <h1>Hello, world!</h1>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Улица</InputLabel>
        <SearchFilter option={selectedStreet} label='Street' selectHandler={chooseStreetHandler} options={streets} />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Дом</InputLabel>
        <SearchFilter option={selectedHouse} label='House' selectHandler={chooseHouseHandler} options={houses} />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Квартира</InputLabel>
        <SearchFilter option={selectedHouseFlat} label='HouseFlat' selectHandler={chooseHouseFlatHandler} options={house_flats} />
      </FormControl>

      <Button onClick={searchResidentsHandler}>Найти</Button>
    </div>
  );
};

export default App;
