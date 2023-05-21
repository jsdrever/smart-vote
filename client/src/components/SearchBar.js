import React, { useState } from 'react';

// We take our props object and assign each property to it's own variable name.
// In this case we only passed one prop, `onFormSubmit`
function SearchBar({ onFormSubmit }) {
  // Our state variable for the search term. Defaults to "microsoft/vscode".
  const [term, setTerm] = useState('microsoft/vscode');

  const sendTerm = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={sendTerm}>
        <div className="field">
          <label>Retrieve GitHub Issues</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="facebook/react"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;










// import React, {useState} from 'react'


// const searchBar = () => {

//  const [searchInput, setSearchInput] = useState("");

//  const countries = [

//   { state: "Alabama", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Alaska", senator: ["Lisa Murkowski", "Dan Sullivan"] },
//   { state: "Arizona", senator: ["Kyrsten Sinema", "Mark Kelly"] },
//   { state: "Arkansas", senator: ["John Boozman", "Tom Cotton"] },
//   { state: "California", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Colorado", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Connecticut", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Delaware", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Florida", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Georgia", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Hawaii", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Idaho", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Illinois", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Indiana", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Iowa", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Kansas", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Kentucky", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Louisiana", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Maine", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Maryland", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Massachusetts", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Michigan", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { state: "Minnesota", senator: ["Tommy Tuberville", "Katie Britt"] },
//   { name: "Pakistan", continent: ["Tommy Tuberville", "Katie Britt"] },

// ];

// const handleChange = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// };

// if (searchInput.length > 0) {
//     countries.filter((country) => {
//     return country.name.match(searchInput);
// });
// }
