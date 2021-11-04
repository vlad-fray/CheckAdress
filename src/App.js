import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStreetsThunk, setHouseThunk } from './store/checkAddress/action';

const App = () => {
  const streets = useSelector((state) => state.checkAdress.streets);
  const houses = useSelector((state) => state.checkAdress.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStreetsThunk());
  }, [dispatch]);

  const chooseStreetHandler = (id) => {
    dispatch(setHouseThunk(id));
  };

  const chooseHouseHandler = (id) => {
    console.log(id);
  };

  return (
    <div className='App'>
      <h1>Hello, world!</h1>
      {streets &&
        streets
          .map((street) => (
            <p key={street.id} onClick={() => chooseStreetHandler(street.id)}>
              {street.name}
            </p>
          ))
          .splice(0, 10)}
      <br />
      {houses &&
        houses.map((house) => (
          <p key={house.id} onClick={() => chooseHouseHandler(house.id)}>
            {house.name}
          </p>
        ))}
    </div>
  );
};

export default App;
