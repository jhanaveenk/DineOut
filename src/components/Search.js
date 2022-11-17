import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";


const Search = () => {
    const [search, setSearch] = useState(null);

    
  const handleOnChange = () => {
    
    
  };
  const loadOptions = () => {
    
    
};

  return (
    <>
    <div className= " container align-center">
    <div>It's Now Save to Crave!</div>
    <AsyncPaginate
      placeholder="Search for Restaurent , Location..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
    </div>
    </>
  )
}

export default Search