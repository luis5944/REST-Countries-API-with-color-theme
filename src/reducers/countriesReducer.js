import { fetchAll } from "../services/countriesService";

const initialState = {
  countries: [],
  selectedCountry: {},
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SELECT_COUNTRY":
      const selectedCountry = state.countries.find(
        (country) => country.name === action.payload
      );
      return { ...state, selectedCountry };
    case "DELETE_SELECT_COUNTRY":
      return { ...state, selectedCountry: {} };
    default:
      return state;
  }
};

export const getAllCountries = () => {
  return async (dispatch) => {
    const countries = await fetchAll();
    dispatch({ type: "GET_ALL_COUNTRIES", payload: countries });
  };
};

export const getCountrySelected = (name) => {
  return {
    type: "SELECT_COUNTRY",
    payload: name,
  };
};

export const deleteSelectedCountry = () => {
  return {
    type: "DELETE_SELECT_COUNTRY",
  };
};

export default countriesReducer;
