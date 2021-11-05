import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from './components/SearchForm';
import { addResidentThunk } from './store/searchAddress/action';
import { getSelectedStreet, getSelectedHouse, getSelectedHouseFlat } from './store/searchAddress/selectors';

const App = () => {
  const [isAddingResident, setIsAddingResident] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const selectedStreet = useSelector(getSelectedStreet);
  const selectedHouse = useSelector(getSelectedHouse);
  const selectedHouseFlat = useSelector(getSelectedHouseFlat);
  const isDataFull = selectedStreet && selectedHouse && selectedHouseFlat;

  const dispatch = useDispatch();

  const submitHandler = () => {
    console.log({ name: inputName, number: inputNumber, email: inputEmail, addressId: selectedHouseFlat.id });
    dispatch(
      addResidentThunk({ name: inputName, number: inputNumber, email: inputEmail, addressId: selectedHouseFlat.id })
    );
  };
  // 89021113344

  return (
    <div className='App'>
      <h1>Hello, world!</h1>
      <SearchForm />
      {isDataFull && <Button onClick={() => setIsAddingResident(true)}>Добавить жильца</Button>}
      <Dialog open={isAddingResident} onClose={() => setIsAddingResident(false)}>
        <DialogTitle>Добавить жильца</DialogTitle>
        <DialogContent>
          <DialogContentText>Для добавления жильца обязательно введите его ФИО и номер телефона.</DialogContentText>
          <DialogContentText>Данные, отмеченные звездочкой (*), обязательны к заполению</DialogContentText>
          <TextField
            autoFocus
            margin='normal'
            id='residentName'
            label='ФИО*'
            fullWidth
            variant='outlined'
            type='text'
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <TextField
            margin='normal'
            id='residentNumber'
            label='Номер телефона*'
            fullWidth
            variant='outlined'
            type='number'
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
          <TextField
            margin='normal'
            id='residentEmail'
            label='Email'
            fullWidth
            variant='outlined'
            type='email'
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <Button onClick={submitHandler}>Добавить</Button>
          <Button onClick={() => setIsAddingResident(false)}>Закрыть</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
