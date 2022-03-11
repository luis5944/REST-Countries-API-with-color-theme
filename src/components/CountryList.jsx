import { useSelector } from "react-redux";

import Country from "./Country";

const CountryList = ({ country, region }) => {
  const countries = useSelector((state) => state.countries.countries).filter(
    (c) => {
      if (region.value !== "All" && country.length > 0) {
        return (
          c.region === region.value &&
          c.name.toUpperCase().includes(country.toUpperCase())
        );
      }
      if (country.length > 0) {
        return c.name.toUpperCase().includes(country.toUpperCase());
      }
      if (region.value !== "All") {
        return c.region === region.value;
      }

      return c;
    }
  );

  return (
    <div className="container">
      <div className="main">
        {countries.length > 0 ? (
          countries.map((c) => <Country key={c.name} country={c} />)
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
};

export default CountryList;
