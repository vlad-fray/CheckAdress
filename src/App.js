import { Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchForm from './components/SearchForm';
import { getSelectedStreet, getSelectedHouse, getSelectedHouseFlat } from './store/searchAddress/selectors';
import AddClientForm from './components/AddClientForm/index';

const App = () => {
  const [isAddingResident, setIsAddingResident] = useState(false);

  const selectedStreet = useSelector(getSelectedStreet);
  const selectedHouse = useSelector(getSelectedHouse);
  const selectedHouseFlat = useSelector(getSelectedHouseFlat);
  const isDataFull = selectedStreet && selectedHouse && selectedHouseFlat;

  // 89021113344

  return (
    <div className='App'>
      <h1>Hello, world!</h1>
      <SearchForm />
      {isDataFull && <Button onClick={() => setIsAddingResident(true)}>Добавить жильца</Button>}
      <AddClientForm
        isShown={isAddingResident}
        setIsShown={setIsAddingResident}
        selectedHouseFlat={selectedHouseFlat}
      />
    </div>
  );
};

export default App;
