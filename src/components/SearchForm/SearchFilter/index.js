import { Select, MenuItem } from '@mui/material';
import React from 'react';

const SearchFilter = ({ option, options, label, selectHandler }) => {
  return (
    <Select value={option?.id || ''} label={label}>
      <MenuItem value='' key='' onClick={() => selectHandler(null)}>
        Не выбрано
      </MenuItem>
      {options &&
        options.map((option) => (
          <MenuItem value={option.id} key={option.id} onClick={() => selectHandler(option)}>
            {option.name}
          </MenuItem>
        ))}
    </Select>
  );
};

export default SearchFilter;
