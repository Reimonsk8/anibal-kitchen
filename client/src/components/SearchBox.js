import React from 'react';
import './SearchBox.css'

const SearchBox = ({input, onChange}) => { 
    return(
      <div id="SearchBoxContainer">
        {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/> */}
        <form action="">
          <input 
            key=""
            value={input}
            placeholder={"search by name"}
            onChange={(e)=> onChange(e.target.value, "search")}
          />
          <i className="fa fa-search"></i>
        </form>
      </div>
    )
}
export default SearchBox;

