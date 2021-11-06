import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { useState } from 'react';
import { addResident } from './../../API/editClientAPI';

const AddClientForm = ({ selectedHouseFlat, isShown, setIsShown, initData }) => {
  const [inputName, setInputName] = useState(initData?.name || '');
  const [inputNumber, setInputNumber] = useState(initData?.phone || '');
  const [inputEmail, setInputEmail] = useState(initData?.email || '');

  const submitHandler = async () => {
    await addResident({ name: inputName, number: inputNumber, email: inputEmail, addressId: selectedHouseFlat.id });
    setIsShown(false);
  };
  // 89021113344

  return (
    <Dialog open={isShown} onClose={() => setIsShown(false)}>
      <DialogTitle>Добавить или редактировать жильца</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Для добавления или редактирования жильца обязательно введите его ФИО и номер телефона.
        </DialogContentText>
        <DialogContentText>Данные, отмеченные звездочкой (*), обязательны к заполению</DialogContentText>
        <TextField
          autoFocus
          margin='normal'
          id='residentName'
          label='ФИО'
          fullWidth
          variant='outlined'
          type='text'
          required
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <TextField
          margin='normal'
          id='residentNumber'
          label='Номер телефона'
          fullWidth
          variant='outlined'
          type='phone'
          required
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
        <Button onClick={() => setIsShown(false)}>Закрыть</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddClientForm;
