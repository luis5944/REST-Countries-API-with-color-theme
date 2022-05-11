import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./styles";
import AppBar from "./components/AppBar";
import CountryList from "./components/CountryList";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage";
import { useDispatch } from "react-redux";
import { getAllCountries } from "./reducers/countriesReducer";
import SearchBar from "./components/SearchBar";

function App() {
  const [isCountryPage, setIsCountryPage] = useState(false);
  const themeLocal = localStorage.getItem("theme-page");
  const [theme, setTheme] = useState(themeLocal ? themeLocal : "light");
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState({ value: "All", label: "All Regions" });

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <HashRouter>
        <GlobalStyles />
        <AppBar theme={theme} setTheme={setTheme} />
        {!isCountryPage && (
          <SearchBar
            country={country}
            setCountry={setCountry}
            setRegion={setRegion}
            region={region}
            theme={theme}
          />
        )}
        <Routes>
          <Route
            path="/"
            exact
            element={<CountryList country={country} region={region} />}
          />
          <Route
            path={`/country/:name`}
            element={<CountryPage setIsCountryPage={setIsCountryPage}/>}
          />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
