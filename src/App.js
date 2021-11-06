import { Button, Container, FormControl, FormControlLabel, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from './components/SearchForm';
import {
  getSelectedStreet,
  getSelectedHouse,
  getSelectedHouseFlat,
  getSearchedResidentByNumber,
} from './store/searchAddress/selectors';
import AddClientForm from './components/AddClientForm/index';
import { setSearchedResidentByPhone } from './store/searchAddress/action';

const App = () => {
  const [isAddingResident, setIsAddingResident] = useState(false);
  const [isEditingResident, setIsEditingResident] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const searchedResidentByPhoneNumber = useSelector(getSearchedResidentByNumber);
  const dispatch = useDispatch();

  const selectedStreet = useSelector(getSelectedStreet);
  const selectedHouse = useSelector(getSelectedHouse);
  const selectedHouseFlat = useSelector(getSelectedHouseFlat);
  const isDataFull = selectedStreet && selectedHouse && selectedHouseFlat;

  const searchResidentByNumberHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchedResidentByPhone(phoneNumber));
  };

  // 89021113344

  return (
    <Container maxWidth='md' sx={{ margin: '4rem' }}>
      <Grid container spacing={3} direction='column'>
        <Grid item md={6}>
          <h3>Чтобы продолжить, введите точный адрес проживания</h3>
          <SearchForm />
        </Grid>
        <Grid item md={6}>
          {isDataFull && <Button onClick={() => setIsAddingResident(true)}>Добавить жильца</Button>}
        </Grid>
        <Grid item md={6}>
          {isDataFull && (
            <form action='#' onSubmit={searchResidentByNumberHandler}>
              <h3>Если у вас уже есть аккаунт, введите свой номер телефона</h3>
              <TextField
                margin='normal'
                id='phoneNumber'
                label='Номер телефона'
                fullWidth
                variant='outlined'
                type='text'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </form>
          )}

          {searchedResidentByPhoneNumber && (
            <>
              <Button onClick={() => setIsEditingResident(true)}>Редактировать данные жильца</Button>
              <AddClientForm
                isShown={isEditingResident}
                setIsShown={setIsEditingResident}
                selectedHouseFlat={selectedHouseFlat}
                initData={searchedResidentByPhoneNumber}
              />
            </>
          )}
        </Grid>
      </Grid>

      <AddClientForm
        isShown={isAddingResident}
        setIsShown={setIsAddingResident}
        selectedHouseFlat={selectedHouseFlat}
      />
    </Container>
  );
};

export default App;
