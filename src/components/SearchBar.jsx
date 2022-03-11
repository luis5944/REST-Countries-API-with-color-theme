import React from "react";
import { BiSearch } from "react-icons/bi";


import Select from "react-select";

const SearchBar = ({ country, setCountry, setRegion, region, theme }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: theme === "light" ? "hsl(200, 15%, 8%)" : "#FAFAFA",
      backgroundColor: theme === "light" ? "#FAFAFA" : "hsl(200, 15%, 8%)",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: theme === "light" ? "hsl(0, 0%, 98%)" : "#151d24",
      color: "white",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const color = theme === "light" ? "hsl(200, 15%, 8%)" : "#FAFAFA";
      return { ...provided, opacity, color };
    },
  };

  const options = [
    { value: "All", label: "All Regions" },
    { value: "Europe", label: "Europe" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
  ];
  return (
    <div className="container-search">
      <div className="search-input">
        <BiSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </div>
      <Select
        options={options}
        onChange={(region) => {
          setRegion(region);
        }}
        defaultValue={options[0]}
        value={region}
        styles={customStyles}
      />
    </div>
  );
};

export default SearchBar;
