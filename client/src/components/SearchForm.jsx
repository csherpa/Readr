import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@material-ui/core';

const SearchForm = (props) => {
  const [searchVal, setSearchVal] = useState('');

  const handleChange = (event) => {
    const searchVal = event.target.value;
    setSearchVal(searchVal);
  };

  const handleClick = (event) => {
    // console.log('click');
    event.preventDefault();
    const { handleSearch } = props;
    handleSearch(searchVal);
    setSearchVal('');
  };

  return (
    <div>
      <div>
        <TextField value={searchVal} onChange={handleChange} id="outlined-basic" label="Search Book" variant="outlined" size="small" />
        <Button onClick={handleClick} variant="contained" id="outlined-basic" color="success">Search</Button>
      </div>
    </div>
  );
};

export default SearchForm;
